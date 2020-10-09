import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/seo';
import { Body, Header } from '../components/Typography';
import Img from 'gatsby-image';

const options = {
    renderMark: {
        // eslint-disable-next-line react/display-name
        [MARKS.BOLD]: (text: string) => <Body fontWeight="bold">{text}</Body>,
    },
    renderNode: {
        // eslint-disable-next-line react/display-name
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <Body color="black">{children}</Body>
        ),
    },
};

const Index = () => {
    const data = useStaticQuery(staticQuery);
    console.log('data: ', data);

    return (
        <>
            <SEO title="Home" />
            <Card>
                <Heading>
                    <Image
                        fixed={data.image.childImageSharp.fixed}
                        alt="A corgi smiling happily"
                    />
                    <Header>Hi! I&apos;m Ville!</Header>
                </Heading>
            </Card>
            {documentToReactComponents(
                data.contentfulAbout.childContentfulAboutCvRichTextNode.json,
                options as any,
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
