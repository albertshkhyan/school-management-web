import React from 'react';
import { Typography, Box } from '@mui/material';

const Teachers: React.FC = () => {
    return (
        <Box padding={3}>
            <Typography variant="h4">Teacher Management</Typography>
            <Typography variant="body1">Manage teacher profiles, schedules, and assigned classes here.</Typography>
        </Box>
    );
};

export default Teachers;
