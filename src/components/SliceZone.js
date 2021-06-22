import React from 'react'
import { graphql } from 'gatsby'
import Hero from '@/sections/Hero'

const SliceZone = ({ data }) => {
  const sliceComponents = {
    hero: Hero,
  }

  const sliceZoneContent = data.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent data={slice} key={`slice-${index}`} />
    }
  })

  return <>{sliceZoneContent}</>
}

export default SliceZone

export const query = graphql`
  fragment PrismicSlices on PrismicPage {
    data {
      title {
        text
      }
      image {
        url
      }
      description
      body {
        ...Hero
      }
    }
  }
`
