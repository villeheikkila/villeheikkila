import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { textTransform, TextTransformProps } from '../utils/styles';

import {
    borderRadius,
    BorderRadiusProps,
    fontFamily,
    FontFamilyProps,
    fontSize,
    FontSizeProps,
    fontStyle,
    FontStyleProps,
    fontWeight,
    FontWeightProps,
    letterSpacing,
    LetterSpacingProps,
    lineHeight,
    LineHeightProps,
    size,
    SizeProps,
    space,
    SpaceProps,
    TextAlignProps,
    textStyle,
    TextStyleProps,
    color,
    ColorProps,
    gridArea,
    GridAreaProps,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
} from 'styled-system';

export type DynamicProps =
    | SpaceProps
    | FontSizeProps
    | FontStyleProps
    | SizeProps
    | TextStyleProps
    | LetterSpacingProps
    | FontFamilyProps
    | FontWeightProps
    | BorderRadiusProps
    | FontFamilyProps
    | LineHeightProps
    | TextAlignProps
    | GridAreaProps
    | FlexboxProps
    | ColorProps
    | TextTransformProps
    | LayoutProps;

const StyledComponent = styled.div`
    ${space}
    ${fontSize}
    ${fontStyle}
    ${size}
    ${color}
    ${textStyle}
    ${letterSpacing}
    ${fontFamily}
    ${fontWeight}
    ${borderRadius}
    ${lineHeight}
    ${gridArea}
    ${flexbox}
    ${textTransform}
    ${color}
    ${layout}
`;

const Dynamic: React.FC<DynamicProps & { tag: string | ReactNode }> = ({
    children,
    tag = 'div',
    ...rest
}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AsComponent = StyledComponent.withComponent(tag as any);

    return <AsComponent {...rest}>{children}</AsComponent>;
};

export default Dynamic;
