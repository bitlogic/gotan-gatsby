import { useStaticQuery, graphql } from "gatsby"

const useForDevelopers = () => {
  return useStaticQuery(graphql`
    {
      sanityForDevelopers {
        dinamicContent {
            ... on SanityDualAsymmetric {
                _key
                _type
                image {
                  alt
                  image {
                    asset {
                      _id
                    }
                    crop {
                      top
                      right
                      left
                      bottom
                    }
                    hotspot {
                      y
                      x
                      width
                      height
                    }
                  }
                }
                title
                backgroundColor
                bannerStyle
              }
              ... on SanityTextBlockList {
                _key
                _type
                textBlocks {
                  _key
                  _type
                  _rawContent
                  title
                }
                title
                titleTop
              }
              ... on SanityTextContent {
                _key
                _type
                _rawContent
              }
              ... on SanityTextImageCategory {
                _key
                _type
                category
                image {
                  _key
                  alt
                  image {
                    asset {
                      _id
                    }
                    crop {
                      top
                      right
                      left
                      bottom
                    }
                    hotspot {
                      y
                      x
                      width
                      height
                    }
                  }
                }
                textBlock {
                  _rawContent
                  title
                }
                textRight
              }
            }
            titlePage
      }
    }
  `)
}

export default useForDevelopers