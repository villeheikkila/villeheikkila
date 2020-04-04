import React from 'react';
import styled from 'styled-components';
import { grid, GridProps, color, BackgroundColorProps } from 'styled-system';
import Footer from './Footer';
import Header from './Header';

const Page: React.FC<GridProps | BackgroundColorProps> = ({
    children,
    ...rest
}) => (
    <Container
        gridTemplateAreas="'header' 'content' 'footer'"
        gridTemplateColumns="1fr"
        gridTemplateRows="100px 1fr 100px"
    >
        <Header gridArea="header" width="100%" height="100px" />
        <Content gridArea="content" {...rest}>
            {children}
        </Content>
        <Footer gridArea="footer" width="100%" height="100px" />
    </Container>
);

const Container = styled.div<GridProps>`
    ${grid}
    display: grid;
    width: 100vw;
    height: 100vh;
`;

const Content = styled.div<GridProps | BackgroundColorProps>`
    ${grid}
    ${color}
    display: grid;
`;

export default Page;
