import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme/theme';
import { GlobalStyle } from './src/theme/globalStyle';

export const wrapRootElement = ({ element }: any) => {
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {element}
    </ThemeProvider>;
};
