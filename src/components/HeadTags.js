import React from 'react'
import Helmet from 'react-helmet'


class HeadTags extends React.Component {
    state = {}

    render() {
        var prop = this.props

        return (
            <React.Fragment>
                <Helmet>
                    <title>
                        {prop.pageTitle}
                    </title>
                    <meta name="description" content={prop.metaDescription} />
                    <meta name="keywords" content={prop.metaKeywords} />
                    <meta name="author" content={prop.metaAuthor} />
                    <meta name="copyright" content={prop.metaCopyright} />
                    <meta name="robots" content={prop.metaIndex} />
                    <meta property="og:url" content={prop.ogUrl} />
                    <meta property="og:site_name" content={prop.ogSiteName} />
                    <meta property="og:image" content={prop.ogSiteImage} />
                    <meta property="og:image:secure_url" content={prop.ogSiteImageSecure} />
                    <meta property="og:image:width" content={prop.ogImageWidth} />
                    <meta property="og:image:height" content={prop.ogImageHeight} />
                    <meta property="twitter:card" content="summary_lage_image" />
                    <meta property="twitter:description" content={prop.twitterDescription} />
                    <meta property="twitter:title" content={prop.twitterTitle} />
                    <meta name="twitter:image" content={prop.twitterImage} />
                </Helmet>
            </React.Fragment>
        )
    }
}

export default HeadTags