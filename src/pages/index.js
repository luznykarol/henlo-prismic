import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/components/Layout'
import Seo from '@/components/seo'
import SliceZone from '@/components/SliceZone'

const IndexPage = ({ data }) => {
  const document = data.prismicPage.data

  const seo = {
    title: document.title.text,
    description: document.description,
    image: document.image.url,
  }

  return (
    <Layout>
      <SEO data={seo} />
      <SliceZone data={document.body} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    prismicPage(uid: { eq: "home" }) {
      uid
      ...PrismicSlices
    }
  }
`
