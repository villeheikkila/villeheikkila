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
    position,
    PositionProps,
} from 'styled-system';

type BoxProps = GridProps | FlexboxProps | LayoutProps | PositionProps;

const Box: React.FC<BoxProps> = ({ children, ...rest }) => (
    <Container {...rest}>{children}</Container>
);

const Container = styled.div<BoxProps>`
    ${grid}
    ${flexbox}
    ${layout}
    ${position}
`;

export const Form = styled.form<BoxProps>`
    ${grid}
    ${flexbox}
    ${layout}
    ${position}
`;

export default Box;
