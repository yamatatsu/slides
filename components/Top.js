import React, { Fragment } from 'react'
import { Head } from 'mdx-deck'

export default ({ title, twitterImage, eventName }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@yamatatsu193' />
      <meta name='twitter:title' content={title} />
      {twitterImage && <meta name='twitter:image' content={twitterImage} />}
    </Head>

    <h1 className="sc-jzJRlG enxKql sc-fjdhpX dYzIWH" fontSize="4" color="heading">
      {title}
    </h1>
    <hr/>
    <h3 className="sc-kgoBCf kVSTZj sc-chPdSV gjsVpB" fontSize="2" color="heading">
      やまたつ
    </h3>
    <h3 className="sc-kgoBCf kVSTZj sc-chPdSV gjsVpB" fontSize="2" color="heading">
      {eventName}
    </h3>
  </Fragment>
)
