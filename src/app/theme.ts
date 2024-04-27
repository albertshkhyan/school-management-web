import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff1744',
        },
        background: {
            default: '#fff',
            paper: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h1: {
            fontSize: '2.2rem',
        },
        h2: {
            fontSize: '1.8rem',
        },
        body1: {
            fontSize: '1rem',
        },
    },
});

export default theme;
