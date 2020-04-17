import React from "react"
import { Link } from "gatsby"
import '../styles/reset.scss'
import '../styles/global.scss'
import '../styles/navbar.scss'
import '../styles/footer.scss'

import { useStaticQuery, graphql } from "gatsby"
import Logo from "../svg/logo.svg"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
  query LayoutQuery {
    shewLogo: file(absolutePath: { regex: "/shew-logo.png/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        social {
          twitter
          facebook
          instagram
        }
        donate {
          shop
        }
      }
    }
  }
    `)
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <section className="container-home-hero">
        <h2>YOUR SITE NEEDS A HERO</h2>
        <Logo />
      </section>
    )
  } else {
    header = (<></>)
  }

  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <Footer data={data} />
    </>
  )
}

export default Layout

const Footer = ({ data }) => (
  <footer className="footer">
    <div className="pages">
      <p>Pages</p>
      <ul className="footer-link-list">
        <li><Link className="link" activeClassName="active" to="/">Home</Link></li>
        <li><Link className="link" activeClassName="active" to="/dear-players">Dear Players</Link></li>
        <li><Link className="link" activeClassName="active" to="/dear-sponsors">Dear Sponsors</Link></li>
        <li><Link className="link" activeClassName="active" to="/donate">Donate</Link></li>
        <li><Link className="link" activeClassName="active" to="/about-us">About Us</Link></li>
        <li><Link className="link" activeClassName="active" to="/blog">Blog</Link></li>
        <li><a className="link" href={data.site.siteMetadata.donate.shop} target="_blank" rel="noopener noreferrer">Shop</a></li>
        <li><Link className="link" activeClassName="active" to="/contact-us">Contact Us</Link></li>
        <li><Link className="link" activeClassName="active" to="/media">Media</Link></li>
        <li><Link className="link" activeClassName="active" to="/legal/terms-of-use">Terms of Use</Link></li>
        <li><Link className="link" activeClassName="active" to="/legal/privacy-policy">Privacy Policy</Link></li>
      </ul>
    </div>
    <div className="socials">
      <p>Connect With Us!</p>
    </div>
    <div className="logo-container">
      <p className="tagline">#StandWithMiLB</p>
    </div>
  </footer>
)