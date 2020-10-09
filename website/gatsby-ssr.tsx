import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme/theme';
import { GlobalStyle } from './src/theme/globalStyle';

require('typeface-open-sans');
require('typeface-quicksand');
require('typeface-merriweather');

export const wrapRootElement = ({ element }: any): any => {
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>;
};
