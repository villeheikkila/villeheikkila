import React from 'react';
import styled from 'styled-components';
import { PlaceSelfProps } from '../utils/styles';

import {
    grid,
    GridProps,
    flexbox,
    layout,
    FlexboxProps,
    LayoutProps,
} from 'styled-system';

type BoxProps = GridProps | FlexboxProps | LayoutProps | PlaceSelfProps;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => (
    <Container {...rest}>{children}</Container>
);

const Container = styled.div<BoxProps>`
    ${grid}
    ${flexbox}
    ${layout}
`;

export const Form = styled.form<BoxProps>`
    ${grid}
    ${flexbox}
    ${layout}
`;

export default Box;
