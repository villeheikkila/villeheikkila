import React, { FC } from 'react';
import styled from 'styled-components';

const Layout: FC = ({ children }) => {
    return <Page>{children}</Page>;
};

const Page = styled.div`
    max-width: 800px;
    margin: 0 auto;
`;
export default Layout;
