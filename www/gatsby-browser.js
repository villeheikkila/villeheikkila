import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import './src/global.css';

require('typeface-open-sans');
require('typeface-quicksand');
require('typeface-merriweather');

export const shouldUpdateScroll = () => {
    return false;
};

export const wrapRootElement = ({ element }) => {
    return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};
