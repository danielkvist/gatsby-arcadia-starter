const emoji = require("remark-emoji")

const siteMetadata = {}

const plugins = (sectionsPath, githubToken) => [
  "gatsby-plugin-react-helmet",
  "gatsby-plugin-styled-components",
  "gatsby-plugin-sharp",
  "gatsby-remark-images",
  {
    resolve: "gatsby-plugin-mdx",
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 1035,
            sizeByPixelDesinity: true,
            remarkPlugins: [emoji],
          },
        },
      ],
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "sections",
      path: sectionsPath,
    },
  },
  {
    resolve: `gatsby-source-github-api`,
    options: {
      token: githubToken,
      variables: {},
      graphQLQuery: `
        query {
          viewer {
            pinnedItems(first: 6) {
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    description
                    url
                  }
                }
              }
            }
          }
        }
      `,
    },
  },
]

module.exports = ({ sectionsPath, githubToken }) => {
  return {
    siteMetadata,
    plugins: plugins(sectionsPath, githubToken),
  }
}
