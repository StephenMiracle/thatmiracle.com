import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export default ({ siteTitle }) => (
  
  <header>
    <Link to="/">
      {siteTitle}
    </Link>
  </header>
) 