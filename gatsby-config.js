require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `Ville Heikkila's developer portfolio`,
        siteUrl: `https://www.villeheikkila.com`,
        description: `I'm a software developer working as software consultant at Taito United. I have experience in development with various JavaScript frameworks on both the frontend and the backend. I especially like to work with React, TypeScript and GraphQL`,
        author: `@villeheikkila`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ville Heikkilä Development`,
                short_name: `Ville Heikkilä`,
                start_url: `/`,
                background_color: `#282a36`,
                theme_color: `#663399`,
                display: `standalone`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true,
            },
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                typeName: 'GitHub',
                fieldName: 'github',
                url: 'https://api.github.com/graphql',
                headers: {
                    Authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
                },
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-anchor-links`,
        'gatsby-plugin-layout',
    ],
};
