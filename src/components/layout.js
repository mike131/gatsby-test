import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { container } from './layout.module.css';
import Header from './header/header';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query GetSiteData {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
