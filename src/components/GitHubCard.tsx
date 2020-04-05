import React from 'react';
import styled from 'styled-components';
import { PlaceSelfProps } from '../utils/styles';
import { Body, Trafalgar } from './Typography';

import {
    grid,
    GridProps,
    layout,
    FlexboxProps,
    LayoutProps,
} from 'styled-system';

interface Project {
    name: string;
    url: string;
    description: string;
}

type StyleProps = GridProps | FlexboxProps | LayoutProps | PlaceSelfProps;

const GitHubCard: React.FC<StyleProps & Project> = ({
    name,
    url,
    description,
    ...rest
}) => (
    <Container {...rest}>
        <Trafalgar>
            <Link href={url}>{name}</Link>
        </Trafalgar>

        <Body>{description}</Body>
    </Container>
);

const Link = styled.a`
    :visited {
        color: white;
    }
`;
// Lets mimick GitHub cards with some borrowed CSS
const Container = styled.div<StyleProps>`
    ${grid}
    ${layout}
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.onyx};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 14px;
    line-height: 1.5;
    color: white;
    word-wrap: break-word;
`;

export default GitHubCard;
