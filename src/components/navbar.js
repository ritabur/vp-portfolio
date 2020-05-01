import React from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: gainsboro;
`;

const Navbar = () => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)

  const {
    site: {
      siteMetadata: {
        title,
      }
    }
  } = data;

  return (
    <StyledHeader>
      <h1>{ title }</h1>
      <div>
        <Link to="/">Homepage</Link>
        <Link to="/about">About</Link>
        <Link to="/category">Category</Link>
        <Link to="/blog-list">Blogs</Link>
      </div>
    </StyledHeader>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar

