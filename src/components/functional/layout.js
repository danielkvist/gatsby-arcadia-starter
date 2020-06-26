import React from "react"
import PropTypes from "prop-types"

import Header from "../ui/header"
import Hero from "./hero"
import Footer from "../ui/footer"
import ContactInfo from "./contact-info"
import FooterLinks from "./footer-links"
import FooterCopyright from "./footer-copyright"

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <main>{children}</main>
      <Footer>
        <ContactInfo />
        <FooterLinks />
        <FooterCopyright />
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout