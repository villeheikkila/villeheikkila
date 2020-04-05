import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { Canon, Label } from '../components/Typography';
import { Body } from '../components/Typography';
import Box, { Form } from '../components/Box';
import Input, { TextArea } from '../components/Input';
import Button from '../components/Button';

const Contact = () => (
    <Page
        backgroundColor="smokyBlack"
        gridTemplateRows=" 100px 1fr"
        gridTemplateColumns="5vw 1fr 5vw"
        gridGap="20px"
        gridTemplateAreas="'. header .' '. contact .'"
    >
        <SEO title="Contact" />
        <Box gridArea="header">
            <Canon color="white">Contact</Canon>
            <Body color="white">Say hello!</Body>
        </Box>

        <Form
            gridArea="contact"
            display="grid"
            gridAutoFlow="row dense"
            gridGap="10px"
            width="400px"
            height="200px"
            name="contact-form"
            data-netlify="true"
            netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact" />
            <Label htmlFor="name" color="white">
                Name
            </Label>
            <Input id="name" name="name" type="text" />

            <Label htmlFor="email" color="white">
                Email
            </Label>
            <Input id="email" name="email" type="email" />

            <Label htmlFor="message" color="white">
                Message
            </Label>
            <TextArea id="message" name="message" height="200px" />
            <Button type="submit">Send</Button>
        </Form>
    </Page>
);

export default Contact;
