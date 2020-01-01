import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Employee from '../components/Employee';

const IndexPage = ({ data }) => {
    const {
        html,
        frontmatter: { employees }
    } = data.markdownRemark;

    return (
        <Layout>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            {employees.map(employee => (
                <Employee key={employee.email} data={employee} />
            ))}
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
            frontmatter {
                employees {
                    email
                    name
                    phone
                    title
                    image {
                        childImageSharp {
                            fixed(width: 200, height: 200, quality: 100) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
                facebookWidget
            }
        }
    }
`;
