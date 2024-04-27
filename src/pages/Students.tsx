import React from 'react';
import { Typography, Box } from '@mui/material';

const Students: React.FC = () => {
    return (
        <Box padding={3}>
            <Typography variant="h4">Student Management</Typography>
            <Typography variant="body1">Here you can manage student records, enrollments, and performances.</Typography>
        </Box>
    );
};

export default Students;
