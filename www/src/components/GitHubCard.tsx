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
    <Container {...rest} onClick={() => (window.location.href = url)}>
        <Trafalgar>{name}</Trafalgar>

        <Body>{description}</Body>
    </Container>
);

const Container = styled.div<StyleProps>`
    ${grid}
    ${layout}
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colors.onyx};
    background-color: ${(props) => props.theme.colors.onyx};
    font-size: 14px;
    line-height: 1.5;
    color: white;
    word-wrap: break-word;
    cursor: pointer;

    :hover {
        background-color: ${(props) => props.theme.colors.midnightBlue};
        border: 1px solid ${(props) => props.theme.colors.flame};
    }
`;

export default GitHubCard;
