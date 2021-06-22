import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '@/components/Layout'
import { RichText } from 'prismic-reactjs'
import Seo from '@/components/seo'

const Post = ({ data }) => {
  const document = data.prismicBlogPost.data

  const seo = {
    title: document.title1.text,
    description: document.description,
    image: document.image.url,
  }

  const calcTimeToRead = (string) => {
    const wordsPerminute = 200
    const words = string.split(/\s/g).length
    const minutes = words / wordsPerminute
    const readTime = Math.ceil(minutes)
    return `${readTime} min read`
  }

  const ttr = calcTimeToRead(document.content.text)

  return (
    <Layout>
      <SEO data={seo} />
      <section className='py-20 sm:py-48 relative bg-green overflow-hidden'>
        <div className='container'>
          <h1>POST</h1>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($uid: String) {
    prismicBlogPost(uid: { eq: $uid }) {
      uid
      data {
        excerpt {
          raw
        }
        date(formatString: "MMM DD, yyyy")
        description
        image {
          url
        }
        title1 {
          text
        }
        content {
          raw
          text
        }
      }
    }
  }
`

export default Post
