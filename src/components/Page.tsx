import React from 'react';
import styled from 'styled-components';
import { grid, GridProps } from 'styled-system';

const Page: React.FC<GridProps> = ({ children, ...rest }) => (
    <Container {...rest}>
        <Header />
        {children}
        <Footer />
    </Container>
);

const Header = () => <div />;
const Footer = () => <div />;

const Container = styled.div<GridProps>`
    ${grid}
    display: grid;
    width: 100vw;
    height: 100vh;
`;

export default Page;
