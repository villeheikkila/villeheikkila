import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import styled from 'styled-components';
import { gridArea, GridAreaProps } from 'styled-system';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Canon } from '../components/Typography';

const About = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "avatar.png" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <Page
            backgroundColor="snow"
            gridTemplateRows=" 100px 200px 1fr"
            gridTemplateColumns="100px 1fr 1fr"
            gridTemplateAreas="'. header .' '. avatar  .' '. . .'"
        >
            <SEO title="About" />
            <Canon gridArea="header">About</Canon>

            <Image gridArea="avatar" fluid={data.file.childImageSharp.fluid} />
        </Page>
    );
};

const Image = styled(Img)<GridAreaProps & { placeSelf?: string }>`
    ${gridArea}
    place-self:  ${(props) => props.placeSelf};
    grid-area: avatar;
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

export default About;
