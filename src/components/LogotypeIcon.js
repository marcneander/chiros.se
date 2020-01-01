import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const LogotypeIcon = () => {
    const {
        file: {
            childImageSharp: { fixed }
        }
    } = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "logo-small.png" }) {
                childImageSharp {
                    fixed(height: 120, quality: 100) {
                        ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return <Image fixed={fixed} loading="eager" fadeIn={false} alt="Chiros ikon logotyp" />;
};

export default LogotypeIcon;
