import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const Logotype = () => {
    const {
        file: {
            childImageSharp: { fixed }
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

    return <Image fixed={fixed} critical fadeIn={false} alt="Chiros logotyp" />;
};

export default Logotype;
