import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Footer: React.FC = ({ ...rest }) => {
    const {
        contentfulFooter: { copyright },
    } = useStaticQuery(graphql`
        query FooterQuery {
            contentfulFooter(node_locale: { eq: "en-US" }) {
                copyright
            }
        }
    `);

    return (
        <Container color="white" {...rest}>
            <p>{copyright}</p>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100px;
`;

export default Footer;
