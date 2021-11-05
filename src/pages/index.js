import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetFrontPage {
      allWpPage(
        filter: { status: { eq: "publish" }, isFrontPage: { eq: true } }
      ) {
        nodes {
          id
          isContentNode
          isFrontPage
          isPostsPage
          isPrivacyPage
          isRevision
          parentId
          slug
          title
          content
          status
        }
      }
    }
  `);

  console.log('**** Front page data ', data);

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/clifford.jpeg"
      />
    </Layout>
  );
};

export default IndexPage;
