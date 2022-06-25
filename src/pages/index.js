import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Alt blir bra"
        src="/Users/marianne/Desktop/my-first-gatsby-site/src/images/regnbue.jpeg"
      />
    </Layout>
  )
}

export default IndexPage