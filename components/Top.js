import React, { Fragment } from 'react'
import { Head } from 'mdx-deck'
import ExLink from './ExLink'

const TWITTER_ACCOUNT = '@yamatatsu193'

export default (props) => {
  const {
    title,
    description = `やまたつ(${TWITTER_ACCOUNT})のスライド`,
    urlPath,
    image,
    eventName,
    hashtag,
  } = props
  const url = `https://slides.yamatatsu193.net/${urlPath}`
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/apple-touch-icon-152x152.png" sizes="152x152"/>
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png"/>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="article:auther" content="https://twitter.com/yamatatsu193" />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={TWITTER_ACCOUNT} />
        <meta name='twitter:title' content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name='twitter:image' content={image} />}
        {image && <meta property="og:image" content={image} />}
        {image && <meta property="og:image:secure_url" content={image} />}
        <meta property="og:site_name" content="slides.yamatatsu193.net" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
      </Head>

      <H1>{title}</H1>
      <hr/>
      <H3>やまたつ</H3>
      <H3>{eventName}</H3>
      {hashtag && (
        <H3><ExLink href={`https://twitter.com/search?q=%23${hashtag}`}>#{hashtag}</ExLink></H3>
      )}
    </Fragment>
  )
}

const H3 = ({ children }) => <h3 className="sc-kgoBCf kVSTZj sc-chPdSV gjsVpB" fontSize="2" color="heading">{children}</h3>
const H1 = ({ children }) => <h1 className="sc-jzJRlG enxKql sc-fjdhpX dYzIWH" fontSize="4" color="heading">{children}</h1>
