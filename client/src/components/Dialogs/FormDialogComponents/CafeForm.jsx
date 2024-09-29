import React from 'react';
import TextBox from '../../UI/TextBox';
import FlexBox from '../../UI/Flexbox';

const CafeForm = ({ cafe, setCafe }) => (
  <>
    <FlexBox gap="1.5rem" paddingBottom="1rem">
      <TextBox
        placeholder="Cafe Name"
        value={cafe.name}
        onChange={(e) =>
          setCafe((prevCafe) => ({ ...prevCafe, name: e.target.value }))
        }
      />
      <TextBox
        placeholder="Location"
        value={cafe.location}
        onChange={(e) =>
          setCafe((prevCafe) => ({
            ...prevCafe,
            location: e.target.value,
          }))
        }
      />
    </FlexBox>
    <TextBox
      placeholder="Cafe Description (max 256 chars)"
      value={cafe.description}
      onChange={(e) =>
        setCafe((prevCafe) => ({
          ...prevCafe,
          description: e.target.value,
        }))
      }
      multiline
      rows={3}
      sx={{ padding: '1rem 2rem' }}
    />
  </>
);

export default CafeForm;
