import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import styled from 'styled-components';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Header>Hi people</Header>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

const Header = styled.h1`
    font-weight: 'bold';
    color: ${(props) => props.theme.colors.black};
`;

export default IndexPage;
