import React from 'react';
import { Typography, Box } from '@mui/material';

const Grades: React.FC = () => {
    return (
        <Box padding={3}>
            <Typography variant="h4">Grades Management</Typography>
            <Typography variant="body1">Record, update, and review student grades across all subjects.</Typography>
        </Box>
    );
};

export default Grades;
