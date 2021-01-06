import { css } from 'styled-components';

export interface TextTransformProps {
    textTransform:
        | 'none'
        | 'capitalize'
        | 'uppercase'
        | 'lowercase'
        | 'initial'
        | 'inherit';
}

export const textTransform = css<TextTransformProps>`
    text-transform: ${(props) => props.textTransform};
`;

export interface PlaceSelfProps {
    placeSelf:
        | 'center'
        | 'end'
        | 'flex-end'
        | 'flex-start'
        | 'self-end'
        | 'self-start'
        | 'start'
        | 'auto'
        | 'baseline'
        | 'left'
        | 'normal'
        | 'right'
        | 'stretch';
}
