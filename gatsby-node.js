const path = require('path');
const { slash } = require('gatsby-core-utils');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for WP Pages
  const {
    data: {
      allWpPage: { nodes: allPages },
    },
  } = await graphql(`
    query GetPublishedPages {
      allWpPage(filter: { status: { eq: "publish" } }) {
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

  const pageTemplate = path.resolve('./src/templates/hero-page.js');

  allPages.forEach((page) => {
    createPage({
      path: page.isFrontPage ? '/' : page.slug,
      component: slash(pageTemplate),
      context: {
        title: page.title,
        id: page.slug,
        meta: {
          description: page.description,
        },
        content: page.content,
      },
    });
  });
};
