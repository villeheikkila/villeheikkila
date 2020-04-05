import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { Canon, Label } from '../components/Typography';
import { useStaticQuery, graphql } from 'gatsby';

const Index = () => {
    const data = useStaticQuery(graphql`
        query a {
            contentfulAbout {
                childContentfulAboutCvRichTextNode {
                    json
                }
            }
        }
    `);

    return (
        <Page
            gridTemplateRows="100px 200px 1fr"
            gridTemplateColumns="50px 1fr 1fr"
            gridTemplateAreas="'. . .' '. header .' '. . .'"
            backgroundColor="midnightBlue"
        >
            <SEO title="Home" />
            <Canon gridArea="header">Yo!</Canon>
        </Page>
    );
};

export default Index;
