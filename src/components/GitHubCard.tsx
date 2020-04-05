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
        <a href={url}>
            <Trafalgar>{name}</Trafalgar>{' '}
        </a>
        <Body>{description}</Body>
    </Container>
);

// Lets mimick GitHub cards with some borrowed CSS
const Container = styled.div<StyleProps>`
    ${grid}
    ${layout}
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid #d1d5da;
    background-color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,
        sans-serif, Apple Color Emoji, Segoe UI Emoji;
    font-size: 14px;
    line-height: 1.5;
    color: #24292e;
    word-wrap: break-word;
`;

export default GitHubCard;
