import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import './src/global.css';

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
