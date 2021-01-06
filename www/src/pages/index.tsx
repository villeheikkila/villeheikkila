/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { Canon, Trafalgar, Body } from '../components/Typography';
import Box from '../components/Box';
import ParticleBackground from '../components/ParticleBackground';
import Typed from 'react-typed';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

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

    const typedString = `<pre>{
  name: <pre class="value">"ville heikkila"</pre>
  profession: <pre class="value">"sofware developer"</pre>
  hobbies: <pre class="value">["powerlifting", "technology", "beer"]</pre>
  github: <pre class="value">"@villeheikkila"</pre>
  linkedin: <pre class="value">"@villejheikkila"</pre>
  editor: <pre class="value">"vscode"</pre>
  font: <pre class="value">"fira code"</pre>
}</pre>`;

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

                <StyledTyped
                    typeSpeed={50}
                    backSpeed={20}
                    strings={[typedString]}
                    smartBackspace
                    backDelay={100}
                    loopCount={0}
                    cursorChar=""
                />
            </Box>
        </Page>
    );
};

const StyledTyped = styled(Typed)`
    grid-area: header;
    position: absolute;
    top: 40%;
    left: 50px;

    pre {
        color: hsl(220, 14%, 71%);
        font-size: 20px;
        white-space: pre;

        > .value {
            color: hsl(355, 65%, 65%);
            display: inline-block;
            padding: 0;
            margin: 0;
        }
    }
`;
export default Index;
