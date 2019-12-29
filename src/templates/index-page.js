import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
    const { html } = data.markdownRemark;

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
            html: PropTypes.string
        })
    }).isRequired
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            html
        }
    }
`;
