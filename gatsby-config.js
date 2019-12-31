module.exports = {
    siteMetadata: {
        title: 'Chiros redovisning',
        description:
            'Chiros är en liten redovisnigsbyrå belägen mitt i Älvsjö centrum och drivs tillsammans av oss, Nina & Niki'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/img`,
                name: 'images'
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads'
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048
                        }
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static'
                        }
                    }
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                enableIdentityWidget: true
            }
        },
        {
            resolve: 'gatsby-plugin-purgecss',
            options: {
                develop: true,
                purgeOnly: ['style.sass']
            }
        },
        'gatsby-plugin-netlify' // make sure to keep it last in the array
    ]
};
