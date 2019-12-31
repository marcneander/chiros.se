import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Logotype = () => {
    const {
        file: {
            childImageSharp: {
                fixed: { src }
            }
        }
    } = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo-full.png" }) {
                childImageSharp {
                    fixed(height: 120, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return <img className="logotype" src={src} alt="Chiros logotyp" />;
};

export default Logotype;
