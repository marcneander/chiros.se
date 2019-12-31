import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import Footer from './Footer';
import Header from './Header';
import '../style.scss';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children }) => {
    const { title, description } = useSiteMetadata();

    return (
        <React.Fragment>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />

                <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}apple-touch-icon.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${withPrefix('/')}favicon-32x32.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`${withPrefix('/')}favicon-16x16.png`} />
                <link rel="manifest" href={`${withPrefix('/')}site.webmanifest`} />
                <link rel="mask-icon" href={`${withPrefix('/')}safari-pinned-tab.svg`} color="#ffcc00" />
                <link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" />

                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="theme-color" content="#ffffff" />

                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="https://chiros.se" />
                <meta property="og:image" content="https://chiros.se/img/logo-full.jpg" />
            </Helmet>
            <div className="container">
                <Header />
                <div className="main">{children}</div>
                <Footer />
            </div>
        </React.Fragment>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default TemplateWrapper;
