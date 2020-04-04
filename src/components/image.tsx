import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { ImageLoaderQuery } from '../../generated/graphql-types';

const Image = () => {
    const data = useStaticQuery<ImageLoaderQuery>(
        graphql`
            query ImageLoader {
                placeholderImage: file(
                    relativePath: { eq: "gatsby-astronaut.png" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `,
    );

    return (
        <Img
            fluid={
                data?.placeholderImage?.childImageSharp?.fluid as FluidObject
            }
        />
    );
};

export default Image;
