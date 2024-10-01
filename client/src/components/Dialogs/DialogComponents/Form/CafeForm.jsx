import React, { useState, useEffect } from 'react';
import TextBox from '../../../UI/TextBox';
import FlexBox from '../../../UI/Flexbox';

const CafeForm = ({ cafe, setCafe }) => {
  const [errors, setErrors] = useState({
    name: '',
    description: '',
  });

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      // case 'name':
      //   if (value.length < 6 || value.length > 10) {
      //     error = 'Cafe name must be between 6 and 10 characters.';
      //   }
      //   break;
      case 'description':
        if (value.length > 256) {
          error = 'Description must not exceed 256 characters.';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (field, value) => {
    setCafe((prevCafe) => ({
      ...prevCafe,
      [field]: value,
    }));

    const error = validateField(field, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  };

  // Validate initial values
  useEffect(() => {
    setErrors({
      name: validateField('name', cafe.name),
      description: validateField('description', cafe.description),
    });
  }, []);

  return (
    <>
      <FlexBox gap="1.5rem" paddingBottom="1rem">
        <TextBox
          placeholder="Cafe Name"
          value={cafe.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextBox
          placeholder="Location"
          value={cafe.location}
          onChange={(e) => handleChange('location', e.target.value)}
        />
      </FlexBox>
      <TextBox
        placeholder="Cafe Description (max 256 chars)"
        value={cafe.description}
        onChange={(e) => handleChange('description', e.target.value)}
        error={!!errors.description}
        helperText={errors.description}
        multiline
        rows={3}
        sx={{ padding: '1rem 2rem' }}
      />
    </>
  );
};

export default CafeForm;
