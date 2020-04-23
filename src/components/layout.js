import React from "react"
import '../styles/reset.scss'
import '../styles/global.scss'
import '../styles/navbar.scss'
import '../styles/footer.scss'
import { Link } from "gatsby"

import Logo from "../svg/logo.svg"
import Arrow from "../svg/arrow-right.svg"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const contactPath = `${__PATH_PREFIX__}/contact`
  let header

  if (location.pathname === rootPath) {
    header = (
      <section className="container-home-hero">
        <h2>YOUR SITE NEEDS A HERO</h2>
        <Logo />
        <ContactButton />
      </section>
    )
  } else if (location.pathname === contactPath) {
    header = (<nav className="contact-navbar">
      <Link to="/"><Arrow style={{ transform: "rotate(180deg)" }} />  Fly Home</Link>
      <Link to="/blog">Fly To Blog <Arrow /> </Link>
    </nav>)
  }

  let footer = (
    <>
      <Link to="/" activeClassName="active">Home</Link>
      <Link to="/blog" activeClassName="active">Blog</Link>
      {location.pathname !== contactPath ? <button className="footer-contact-button">Contact Me!</button> : null}
    </>
  )

  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  )
}

export default Layout

const ContactButton = ({ props }) => (
  <Link to="/contact" className="contact-button">Contact Me!</Link>
)