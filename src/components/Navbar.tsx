import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    School Management
                </Typography>
                <Button color="inherit" component={Link} to="/">Dashboard</Button>
                <Button color="inherit" component={Link} to="/students">Students</Button>
                <Button color="inherit" component={Link} to="/teachers">Teachers</Button>
                <Button color="inherit" component={Link} to="/classes">Classes</Button>
                <Button color="inherit" component={Link} to="/subjects">Subjects</Button>
                <Button color="inherit" component={Link} to="/grades">Grades</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
