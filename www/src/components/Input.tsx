import styled, { css } from 'styled-components';
import {
    color,
    layout,
    LayoutProps,
    padding,
    PaddingProps,
} from 'styled-system';

const inputProperties = css`
    ${color}
    ${layout}
    ${padding}
    border-radius: ${(props) => props.theme.borderRadius};
    outline: none;
    font-family: ${(props) => props.theme.typography.body.fontFamily};
    border: 2px solid ${(props) => props.theme.colors.onyx};
    font-size: 14px;
    color: smokyBlack;
    padding: 10px;

    &:focus {
        outline: none;
        background: flame;
        border: 2px solid ${(props) => props.theme.colors.flame};
    }
`;

type InputProps = LayoutProps | PaddingProps;

const Input = styled.input<InputProps>`
    ${inputProperties}
`;

export const TextArea = styled.textarea<InputProps>`
    ${inputProperties};
`;

export default Input;
