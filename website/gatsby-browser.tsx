import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './src/theme/globalStyle';
import { theme } from './src/theme/theme';

require('typeface-open-sans');
require('typeface-quicksand');
require('typeface-merriweather');

export const wrapRootElement = ({ element }: any) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {element}
        </ThemeProvider>
    );
};
