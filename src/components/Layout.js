import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Footer from './Footer';
import './all.sass';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}apple-touch-icon.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${withPrefix('/')}favicon-32x32.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`${withPrefix('/')}favicon-16x16.png`} />
                <link rel="manifest" href={`${withPrefix('/')}site.webmanifest`} />
                <link rel="mask-icon" href={`${withPrefix('/')}safari-pinned-tab.svg`} color="#ffcc00" />

                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content={withPrefix('/')} />
                <meta property="og:image" content={`${withPrefix('/')}/img/logo-full.jpg`} />
            </Helmet>
            <div>{children}</div>
            <Footer />
        </div>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default TemplateWrapper;
