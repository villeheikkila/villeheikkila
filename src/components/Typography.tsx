import React from 'react';
import Dynamic, { DynamicProps } from './Dynamic';
import theme from '../theme';
const { canon, trafalgar, body } = theme.typography;

export const Canon: React.FC<DynamicProps> = ({ children, ...rest }) => (
    <Dynamic {...canon} {...rest}>
        {children}
    </Dynamic>
);

export const Trafalgar: React.FC<DynamicProps> = ({ children, ...rest }) => (
    <Dynamic {...trafalgar} {...rest}>
        {children}
    </Dynamic>
);

export const Body: React.FC<DynamicProps> = ({ children, ...rest }) => (
    <Dynamic {...body} {...rest}>
        {children}
    </Dynamic>
);
