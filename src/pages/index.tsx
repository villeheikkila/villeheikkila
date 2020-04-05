/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { Canon } from '../components/Typography';
import Box from '../components/Box';
import ParticleBackground from '../components/ParticleBackground';
import Typed from 'react-typed';
import { useStaticQuery, graphql } from 'gatsby';

const Index = () => {
    const {
        contentfulIndexTypedStringsJsonNode: { typed },
    } = useStaticQuery(graphql`
        query Typed {
            contentfulIndexTypedStringsJsonNode {
                typed
            }
        }
    `);

    return (
        <Page
            gridTemplateRows="100px 200px 1fr"
            gridTemplateColumns="5vw 1fr 5vw"
            gridGap="20px"
            gridTemplateAreas="'. . .' 'banner banner banner' '. . .'"
            backgroundColor="smokyBlack"
        >
            <SEO title="Home" />

            <Box gridArea="banner" position="relative">
                <ParticleBackground />

                <Canon
                    gridArea="header"
                    color="white"
                    position="absolute"
                    top="40%"
                    left="50px"
                >
                    <Typed
                        loop
                        typeSpeed={70}
                        backSpeed={20}
                        strings={typed}
                        smartBackspace
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                    />
                </Canon>
            </Box>
        </Page>
    );
};

export default Index;
