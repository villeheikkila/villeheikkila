import React from 'react';

import Page from '../components/Page';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Page backgroundColor="background">
        <SEO title="404: Not found" />
        <h1>Page not found</h1>
    </Page>
);

export default NotFoundPage;
