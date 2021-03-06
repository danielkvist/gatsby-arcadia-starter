import React from "react"

import useSiteMetadata from "../hooks/use-site-metadata"
import Spacer from "./spacer"
import FooterCopy from "./footer-copy"

const FooterCopyright = () => {
  const { title, copy } = useSiteMetadata()

  return (
    <>
      <Spacer size={5} />
      <FooterCopy>
        {copy || `© - ${title} ${new Date().getFullYear()}`}
      </FooterCopy>
      <Spacer size={9} />
    </>
  )
}

export default FooterCopyright
