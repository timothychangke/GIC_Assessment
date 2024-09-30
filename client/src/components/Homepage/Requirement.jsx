import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Paper,
  Box,
} from '@mui/material';
import {
  Code as CodeIcon,
  ChevronRight as ChevronRightIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#021d49',
    },
    text: {
      primary: '#1f2937',
      secondary: '#374151',
    },
  },
});

const requirements = [
  {
    title: 'Backend Requirements',
    icon: <AssignmentIcon />,
    items: [
      'Develop using Node.js, Python, or .NET',
      'Use MySQL, SQLite, or MongoDB',
      'Design database for employee and café data',
      'Implement employee-café relationship',
      'Create GET /cafes endpoint',
      'Create GET /employees endpoint',
      'Create POST /cafe endpoint',
      'Create POST /employee endpoint',
      'Create PUT /cafe endpoint',
      'Create PUT /employee endpoint',
      'Create DELETE /cafe endpoint',
      'Create DELETE /employee endpoint',
      'Provide seed data',
    ],
  },
  {
    title: 'Frontend Requirements',
    icon: <AssignmentIcon />,
    items: [
      'Use React JS',
      'Implement Tanstack Router',
      'Use Tanstack Query',
      'Implement Ag-Grid for tables',
      'Use Material-UI or Ant Design',
      'Create Café Page',
      'Create Employee Page',
      'Create Add/Edit Café Page',
      'Create Add/Edit Employee Page',
      'Implement delete confirmations',
      'Ensure page updates after deletions',
    ],
  },
  {
    title: 'Submission Requirements',
    icon: <AssignmentIcon />,
    items: [
      'Deploy the application',
      'Upload to GitHub',
      'Ensure code functionality',
      'Provide documentation',
      'Dockerize (optional)',
    ],
  },
];

const RequirementsChecklist = () => {
  const initialCheckedItems = requirements.reduce(
    (acc, section, sectionIndex) => {
      section.items.forEach((_, itemIndex) => {
        acc[`${sectionIndex}-${itemIndex}`] = true;
      });
      return acc;
    },
    {}
  );
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

  const handleToggle = (id) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box component="section" id="requirements" sx={{ mb: 10 }}>
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '1.875rem', md: '2.25rem' },
            fontWeight: 'bold',
            mb: 6,
            color: 'text.primary',
            width: '100%'
          }}
        >
          Project Requirements Checklist
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 16 }}>
          {requirements.map((section, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{ borderRadius: 4, p: { xs: 4, md: 6 } }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box sx={{ mr: 2, color: 'primary.main' }}>
                  {React.cloneElement(section.icon, { fontSize: 'large' })}
                </Box>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'text.primary',
                  }}
                >
                  {section.title}
                </Typography>
              </Box>
              <List>
                {section.items.map((item, itemIndex) => {
                  const id = `${index}-${itemIndex}`;
                  return (
                    <ListItem key={id} disablePadding>
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        <Checkbox
                          edge="start"
                          checked={checkedItems[id] || false}
                          onChange={() => handleToggle(id)}
                          sx={{
                            color: 'primary.main',
                            '&.Mui-checked': { color: 'primary.main' },
                          }}
                        />
                      </ListItemIcon>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <ChevronRightIcon
                          sx={{ color: 'primary.main', fontSize: 20 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        sx={{
                          '& .MuiTypography-root': {
                            color: 'text.secondary',
                            textDecoration: checkedItems[id]
                              ? 'line-through'
                              : 'none',
                          },
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Paper>
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default RequirementsChecklist;
