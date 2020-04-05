import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { Canon, Label } from '../components/Typography';
import { Body } from '../components/Typography';
import Box from '../components/Box';
import Input, { TextArea } from '../components/Input';

const Contact = () => (
    <Page
        backgroundColor="snow"
        gridTemplateRows=" 200px 1fr"
        gridTemplateColumns="100px 1fr 100px"
        gridTemplateAreas="'. header .' '. contact .'"
    >
        <SEO title="Contact" />
        <Box gridArea="header">
            <Canon>Contact</Canon>
            <Body>Say hello!</Body>
        </Box>

        <Box
            gridArea="contact"
            display="grid"
            gridAutoFlow="row dense"
            gridGap="10px"
            width="400px"
            height="200px"
        >
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" />

            <Label htmlFor="email">Email</Label>
            <Input id="email" type="text" />

            <Label htmlFor="contact">Message</Label>
            <TextArea id="contact" height="200px" />
        </Box>
    </Page>
);

export default Contact;
