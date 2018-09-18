import React, { Fragment } from 'react'
import { Head } from 'mdx-deck'

const TWITTER_ACCOUNT = '@yamatatsu193'

export default (props) => {
  const { title, description = `やまたつ(${TWITTER_ACCOUNT})のスライド`, urlPath, image, eventName } = props
  const url = `https://slides.yamatatsu193.net/${urlPath}`
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || `やまたつ(${TWITTER_ACCOUNT})のスライド`} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={TWITTER_ACCOUNT} />
        <meta name='twitter:title' content={title} />
        {image && <meta name='twitter:image' content={image} />}
        {image && <meta property="og:image" content={image} />}
        <meta property="og:site_name" content="slides.yamatatsu193.net" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
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
}
