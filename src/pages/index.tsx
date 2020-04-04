import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import SEO from '../components/seo';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { grid, gridArea, GridAreaProps } from 'styled-system';

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
        <Page
            gridTemplateRows="100px 200px 1fr"
            gridTemplateColumns="1fr 1fr 1fr"
            gridTemplateAreas="'. header .' '. avatar .' '. . .'"
        >
            <SEO title="Home" />
            <Header gridArea="header" placeSelf="center">
                Ville Heikkilä
            </Header>
            <Image
                gridArea="avatar"
                placeSelf="center"
                fluid={data.file.childImageSharp.fluid}
            />
        </Page>
    );
};

const Header = styled.h1<GridAreaProps & { placeSelf?: string }>`
    font-weight: 'bold';
    place-self:  ${(props) => props.placeSelf};
    ${gridArea}

    color: ${(props) => props.theme.colors.black};
`;

const Image = styled(Img)<GridAreaProps & { placeSelf?: string }>`
    ${gridArea}
    place-self:  ${(props) => props.placeSelf};
    grid-area: avatar;
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;
export default Index;
