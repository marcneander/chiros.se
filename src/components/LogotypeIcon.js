import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const LogotypeIcon = () => {
    const {
        file: {
            childImageSharp: {
                fixed: { src }
            }
        }
    } = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo-small.png" }) {
                childImageSharp {
                    fixed(height: 120, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <img src={src} alt="Chiros ikon logotyp" />;
};

export default LogotypeIcon;
