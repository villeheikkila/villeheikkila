module.exports = {
    siteMetadata: {
        title: `Ville Heikkila's developer portfolio`,
        description: `I'm a software developer working as software consultant at Taito United. I have experience in development with various JavaScript frameworks on both the frontend and the backend. I especially like to work with React, TypeScript and GraphQL`,
        author: `@villeheikkila`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
            },
        },
        `gatsby-plugin-typescript`,
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `./generated/graphql-types.ts`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-anchor-links`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
