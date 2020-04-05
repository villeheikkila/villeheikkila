import React from 'react';
import styled from 'styled-components';
import { grid, GridProps, color, BackgroundColorProps } from 'styled-system';

const Page: React.FC<GridProps | BackgroundColorProps> = ({
    children,
    ...rest
}) => <Container {...rest}>{children}</Container>;

const Container = styled.div<GridProps | BackgroundColorProps>`
    ${grid}
    ${color}
    display: grid;
    width: 100vw;
    height: 100vh - 100px;
    padding-top: 100px;
`;

export default Page;
