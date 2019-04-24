import React, { Fragment } from 'react'
import { Head } from 'mdx-deck'
import ReactLoading from 'react-loading'
import ExLink from './ExLink'

const TWITTER_ACCOUNT = '@yamatatsu193'

export default props => {
  const { title, eventName, hashtag } = props

  const isPuppeteer =
    window.navigator.userAgent.toLowerCase().indexOf('headlesschrome') >= 0
  if (isPuppeteer) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <ReactLoading type="bars" color="#222222" height={100} width={100} />
      </div>
    )
  }

  return (
    <Fragment>
      <H1>{title}</H1>
      <hr />
      <H3>やまたつ</H3>
      <H3>{eventName}</H3>
      {hashtag && (
        <H3>
          <ExLink href={`https://twitter.com/search?q=%23${hashtag}`}>
            #{hashtag}
          </ExLink>
        </H3>
      )}
    </Fragment>
  )
}

const H3 = ({ children }) => (
  <h3
    className="sc-kgoBCf kVSTZj sc-chPdSV gjsVpB"
    fontSize="2"
    color="heading"
  >
    {children}
  </h3>
)
const H1 = ({ children }) => (
  <h1
    className="sc-jzJRlG enxKql sc-fjdhpX dYzIWH"
    fontSize="4"
    color="heading"
  >
    {children}
  </h1>
)
