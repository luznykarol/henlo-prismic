import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/components/Layout'
import Seo from '@/components/seo'
import SliceZone from '@/components/SliceZone'

const Page = ({ data }) => {
  if (!data) return null
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

export const query = graphql`
  query PageQuery($uid: String) {
    prismicPage(uid: { eq: $uid }) {
      uid
      ...PrismicSlices
    }
  }
`

export default Page
