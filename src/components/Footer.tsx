import React from 'react';
import styled from 'styled-components';
import {
    grid,
    GridProps,
    GridAreaProps,
    LayoutProps,
    layout,
} from 'styled-system';
import { Body } from './Typography';
import { useStaticQuery, graphql } from 'gatsby';

const Footer: React.FC<GridAreaProps | LayoutProps> = ({ ...rest }) => {
    const { contentfulFooter } = useStaticQuery(graphql`
        query FooterQuery {
            contentfulFooter(node_locale: { eq: "en-US" }) {
                copyright
            }
        }
    `);

    return (
        <Container color="white" {...rest}>
            <Body>{contentfulFooter.copyright}</Body>
        </Container>
    );
};

const Container = styled.div<GridProps | LayoutProps>`
    ${grid}
    ${layout}
    display: grid;
    place-items: center;
    background-color: ${(props) => props.theme.colors.snow};
    width: 100%;
    height: 100px;
`;

export default Footer;
