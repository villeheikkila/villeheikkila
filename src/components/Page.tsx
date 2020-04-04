import React from 'react';
import styled from 'styled-components';

const Page: React.FC = ({ children }) => (
    <Container>
        <Header />
        {children}
        <Footer />
    </Container>
);

const Header = () => <div />;
const Footer = () => <div />;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export default Page;
