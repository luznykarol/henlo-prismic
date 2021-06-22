import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'

const Hero = ({ data }) => {
  const { title2, content } = data.primary
  return (
    <section className='pt-20 pb-32 mb-20 lg:mb-0 sm:py-48 lg:pb-64 relative '>
      <h1>HERO</h1>
    </section>
  )
}

export default Hero

export const query = graphql`
  fragment Hero on PrismicPageBodyHero {
    slice_type
    id
    primary {
      content {
        raw
      }
      title2 {
        text
      }
      image1 {
        alt
        fluid(maxWidth: 800, imgixParams: { q: 60 }) {
          ...GatsbyPrismicImageFluid_noBase64
        }
      }
    }
  }
`
