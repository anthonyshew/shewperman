import React, { useRef } from "react"
import { Link, graphql } from "gatsby"
import '../styles/index.scss'

import useAnimateOnVisible from "../hooks/useAnimateOnVisible"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges

  const playerMessage = useRef(null)
  const sponsorMessage = useRef(null)
  useAnimateOnVisible({ element: playerMessage })
  useAnimateOnVisible({ element: sponsorMessage })

  const playerCard = useRef(null)
  const sponsorCard = useRef(null)
  const companyCard = useRef(null)
  useAnimateOnVisible({ element: companyCard })
  useAnimateOnVisible({ element: playerCard })
  useAnimateOnVisible({ element: sponsorCard })

  return (
    <Layout location={location}>
      <SEO
        title="Home"

      >
        <meta name="og:image" content="/media/shew-logo.png" />
        <meta name="twitter:image" content="/media/shew-logo.png" />
        <meta name="twitter:image:alt" content="Adopt a Minor Leaguer Home Page" />
      </SEO>
      <section className="section-blog">
        <h2>Our Blog</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className="post">
              <header>
                <h3 className="post-title">
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small className="post-date">{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </div>
          )
        })}
        <div className="container-link-button">
          <Link to="/blog" className="link-button">
            Visit All Posts
        </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    companyLogo: file(absolutePath: { regex: "/shew-logo.png/" }) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    anthony: file(absolutePath: {regex: "/anthony-shew.png/"}) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    corrins: file(absolutePath: {regex: "/the-corrins.png/"}) {
      childImageSharp {
        fixed(width: 90, height: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
