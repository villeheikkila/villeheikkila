/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { Canon } from '../components/Typography';
import Box from '../components/Box';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
    const isBrowser = typeof window !== undefined;

    return (
        <Page
            gridTemplateRows="100px 200px 1fr"
            gridTemplateColumns="50px 1fr 1fr"
            gridTemplateAreas="'. . .' 'banner banner banner' '. header .'"
            backgroundColor="midnightBlue"
        >
            <SEO title="Home" />
            <Canon gridArea="header" color="white">
                Web Developer
            </Canon>
            <Box gridArea="banner">{isBrowser && <ParticleBackground />}</Box>
        </Page>
    );
};

export default Index;
