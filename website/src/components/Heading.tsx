import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '../theme/theme';

export const Heading: FC<{ tag?: HeadingTags }> = ({
    children,
    tag = 'h1',
}) => {
    console.log(options[tag].fontSize);

    return (
        <H as={tag} tag={tag}>
            {children}
        </H>
    );
};

const H = styled.span<{ tag: HeadingTags }>`
    font-size: ${({ theme, tag }) => theme.fontSize[options[tag].fontSize]};
    font-family: ${({ theme }) => theme.font.serif};
    line-height: ${({ theme }) => theme.lineHeight.medium};
    white-space: nowrap;
`;

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4';

type HeadingOptions = {
    [tag in HeadingTags]: { fontSize: keyof typeof theme.fontSize };
};

const options: HeadingOptions = {
    h1: {
        fontSize: '4xl',
    },
    h2: {
        fontSize: '3xl',
    },
    h3: {
        fontSize: '2xl',
    },
    h4: {
        fontSize: 'xl',
    },
};
