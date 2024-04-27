import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, CssBaseline } from '@mui/material';

import client from './app/ApolloClient';
import theme from './app/theme';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Teachers from './pages/Teachers';
import Classes from './pages/Classes';
import Subjects from './pages/Subjects';
import Grades from './pages/Grades';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/teachers" element={<Teachers />} />
                        <Route path="/classes" element={<Classes />} />
                        <Route path="/subjects" element={<Subjects />} />
                        <Route path="/grades" element={<Grades />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
