import React from "react"
import '../styles/reset.scss'
import '../styles/global.scss'
import '../styles/navbar.scss'
import '../styles/footer.scss'

import Logo from "../svg/logo.svg"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header, footer

  if (location.pathname === rootPath) {
    header = (
      <section className="container-home-hero">
        <h2>YOUR SITE NEEDS A HERO</h2>
        <Logo />
        <ContactButton />
      </section>
    )
    footer = (<p>I am the index footer.</p>)
  } else {
    header = (<ContactButton />)
    footer = (<p>I am the page footer.</p>)
  }

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
  <button className="contact-button" onClick={() => console.log('pop modal out')}>Contact Me!</button>
)