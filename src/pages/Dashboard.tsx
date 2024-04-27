import React from 'react';
import { Typography, Box } from '@mui/material';
import {useGetWelcomeMessageQuery} from "../generated/graphql.tsx";

const Dashboard: React.FC = () => {
    const { loading, error, data } = useGetWelcomeMessageQuery();

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error(`GraphQL Error: ${error.message}`, error);
        return <p>Error: {error.message}</p>;
    }

    return (
        <Box padding={3}>
            <Typography variant="h4">
                Welcome GraphQL Message: {data?.welcomeMessage}
            </Typography>
        </Box>
    );
};

export default Dashboard;
