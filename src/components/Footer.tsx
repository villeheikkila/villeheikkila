import React from 'react';
import styled from 'styled-components';
import {
    grid,
    GridProps,
    GridAreaProps,
    LayoutProps,
    layout,
} from 'styled-system';
import { Body } from './Typography';

const Footer: React.FC<GridAreaProps | LayoutProps> = ({ ...rest }) => (
    <Container color="white" {...rest}>
        <Body>© 2020 Ville Heikkilä – Software Developer at Taito United</Body>
    </Container>
);

const Container = styled.div<GridProps | LayoutProps>`
    ${grid}
    ${layout}
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.colors.snow};
    width: 100%;
    height: 100px;
`;

export default Footer;
