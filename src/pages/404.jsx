import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 * Standard 404 page
 */
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist.</p>
  </Layout>
);

export default NotFoundPage;
