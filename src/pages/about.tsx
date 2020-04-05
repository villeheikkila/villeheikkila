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
            <Body color="white">{children}</Body>
        ),
    },
};

const About = () => {
    const {
        contentfulAbout: { header, childContentfulAboutCvRichTextNode },
    } = useStaticQuery(graphql`
        query MyQuery {
            contentfulAbout(node_locale: { eq: "en-US" }) {
                childContentfulAboutCvRichTextNode {
                    json
                }
                header
            }
        }
    `);

    return (
        <Page
            backgroundColor="smokyBlack"
            gridTemplateRows="100px 1fr"
            gridTemplateColumns="5vw 1fr 5vw"
            gridTemplateAreas="'. header .' '. CV .'"
        >
            <SEO title="About" />
            <Canon gridArea="header" color="white">
                {header}
            </Canon>
            <Box gridArea="CV">
                {documentToReactComponents(
                    childContentfulAboutCvRichTextNode.json,
                    options as any,
                )}
            </Box>
        </Page>
    );
};

export default About;
