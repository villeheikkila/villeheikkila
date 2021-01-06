import React from 'react';
import Page from '../components/Page';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import { Canon } from '../components/Typography';
import GitHubCard from '../components/GitHubCard';
import Box from '../components/Box';

interface Project {
    name: string;
    url: string;
    description: string;
}

const Portfolio = () => {
    const {
        github: {
            viewer: {
                repositories: { nodes },
            },
        },
    } = useStaticQuery(
        graphql`
            query {
                github {
                    viewer {
                        repositories(
                            privacy: PUBLIC
                            affiliations: OWNER
                            first: 20
                            orderBy: { field: CREATED_AT, direction: DESC }
                        ) {
                            nodes {
                                name
                                url
                                description
                            }
                        }
                    }
                }
            }
        `,
    );

    // Filter out repositories with short or no description
    const repositories = nodes.filter(
        (e: Project) => !(e?.description === null || e?.description.length < 5),
    );

    return (
        <Page
            backgroundColor="smokyBlack"
            gridTemplateRows=" 100px 1fr"
            gridTemplateColumns="5vw 1fr 5vw"
            gridGap="20px"
            gridTemplateAreas="'. header .' '. projects .'"
        >
            <SEO title="Portfolio" />
            <Canon gridArea="header" color="white">
                Portfolio
            </Canon>

            <Box
                gridArea="projects"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(auto-fit, minmax(420px, 1fr))"
                gridTemplateRows="repeat(auto-fit, minmax(225px, 1fr))"
            >
                {repositories.map((project: Project) => (
                    <GitHubCard
                        height="200px"
                        key={project.name}
                        {...project}
                    />
                ))}
            </Box>
        </Page>
    );
};

export default Portfolio;
