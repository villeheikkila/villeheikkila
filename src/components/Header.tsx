import React from 'react';
import styled from 'styled-components';
import {
    grid,
    GridProps,
    GridAreaProps,
    layout,
    LayoutProps,
} from 'styled-system';
import { Canon } from './Typography';
import Box from './Box';
import Dynamic, { DynamicProps } from './Dynamic';
import { Link } from 'gatsby';

const Header: React.FC<GridAreaProps | LayoutProps> = ({ ...rest }) => (
    <Container {...rest}>
        <Box gridArea="left">
            <NavigationLink tag={Link} display="flex" to="/">
                <Canon color="snow" paddingRight="10px">
                    Ville
                </Canon>

                <CanonOnHover color="snow">Heikkilä</CanonOnHover>
            </NavigationLink>
        </Box>

        <Box gridArea="right">
            <NavigationLink tag={Link} to="/about">
                About
            </NavigationLink>

            <NavigationLink tag={Link} to="/portfolio">
                Portfolio
            </NavigationLink>

            <NavigationLink tag={Link} to="/contact">
                Contact
            </NavigationLink>
        </Box>
    </Container>
);

const CanonOnHover = styled(Canon)<DynamicProps>`
    :hover {
        color: ${(props) => props.theme.colors.flame};
    }
`;

const NavigationLink = styled(Dynamic)<DynamicProps | { to: string }>`
    font-size: 22px;
    padding-right: 14px;
    color: snow;
    font-family: 'Merriweather,serif';

    :link,
    :active,
    :visited {
        text-decoration: none;
        color: white;
    }

    :hover {
        color: ${(props) => props.theme.colors.flame};
    }
`;

const Container = styled.div<GridProps | LayoutProps>`
    ${grid}
    ${layout}
    background-color: ${(props) => props.theme.colors.midnightBlue};
    display: grid;
    place-items: center stretch;
    grid-template-areas: ". left . right .";
    grid-template-columns: 30px auto 1fr auto 30px;
`;

export default Header;
