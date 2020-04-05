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
                repositories: { nodes: repositories },
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

    return (
        <Page
            backgroundColor="snow"
            gridTemplateRows=" 200px 1fr"
            gridTemplateColumns="100px 1fr 100px"
            gridTemplateAreas="'. header .' '. projects .'"
        >
            <SEO title="Portfolio" />
            <Canon gridArea="header">Portfolio</Canon>

            <Box
                gridArea="projects"
                display="grid"
                gridGap="10px"
                gridTemplateColumns="repeat(auto-fit, minmax(420px, 1fr))"
                gridTemplateRows="repeat(auto-fit, minmax(225px, 1fr))"
            >
                {repositories.map((project: Project) => (
                    <GitHubCard
                        width="400px"
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
