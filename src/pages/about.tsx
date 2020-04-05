import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { Canon, Body } from '../components/Typography';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Box from '../components/Box';

const options = {
    renderMark: {
        // eslint-disable-next-line react/display-name
        [MARKS.BOLD]: (text: string) => <Body fontWeight="bold">{text}</Body>,
    },
    renderNode: {
        // eslint-disable-next-line react/display-name
        [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
            <Body>{children}</Body>
        ),
    },
};

const About = () => {
    const { contentfulAbout } = useStaticQuery(graphql`
        query MyQuery {
            contentfulAbout(node_locale: { eq: "fi" }) {
                childContentfulAboutCvRichTextNode {
                    json
                }
                header
            }
        }
    `);

    return (
        <Page
            backgroundColor="snow"
            gridTemplateRows=" 100px 1fr"
            gridTemplateColumns="100px 1fr 100px"
            gridTemplateAreas="'. header .' '. CV .'"
        >
            <SEO title="About" />
            <Canon gridArea="header">{contentfulAbout.header}</Canon>
            <Box gridArea="CV">
                {documentToReactComponents(
                    contentfulAbout.childContentfulAboutCvRichTextNode.json,
                    options as any,
                )}
            </Box>
        </Page>
    );
};

export default About;
