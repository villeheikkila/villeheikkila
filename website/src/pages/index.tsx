import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const options = {
    renderNode: {
        // eslint-disable-next-line react/display-name
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
    },
};

const Index = () => {
    const data = useStaticQuery(staticQuery);
    console.log('data: ', data);

    return (
        <>
            <SEO title="Home" />
            <Heading>
                <h1>Hey I&apos;m Ville! :)</h1>
                <h1>Software developer, techn enthusiast!</h1>
            </Heading>

            {documentToReactComponents(
                data.contentfulAbout.childContentfulAboutCvRichTextNode.json,
                options,
            )}
            <div style={{ height: '300px' }} />
        </>
    );
};

const Image = styled<any>(Img)`
    border-radius: 50%;
`;

const Card = styled.div`
    width: 600px;
    border: 1px solid black;
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    backdrop-filter: blur(8px);
`;

const staticQuery = graphql`
    query IndexQuery {
        contentfulAbout(node_locale: { eq: "en-US" }) {
            childContentfulAboutCvRichTextNode {
                json
            }
            header
        }
        contentfulFooter(node_locale: { eq: "en-US" }) {
            copyright
        }
        image: file(relativePath: { eq: "me.jpg" }) {
            childImageSharp {
                fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default Index;
