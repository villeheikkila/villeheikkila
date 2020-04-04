import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
    query {
        file(relativePath: { eq: "avatar.png" }) {
            childImageSharp {
                fluid(maxWidth: 200, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const Index = () => {
    const data = useStaticQuery(query);

    return (
        <Page>
            <SEO title="Home" />
            <Image fluid={data.file.childImageSharp.fluid} />
            <Header>Ville Heikkilä</Header>
        </Page>
    );
};

const Header = styled.h1`
    font-weight: 'bold';
    color: ${(props) => props.theme.colors.black};
`;

const Image = styled(Img)`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;
export default Index;
