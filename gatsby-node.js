/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

const languages = ['en', 'lt'];
const baseLang = 'lt';

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              language
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(edge => {
      const { id, fields: { slug }, frontmatter } = edge.node;

      const getNodeDir = () => {
        if (slug === "/en/" || slug === "/lt/" || slug === '/') {
          return 'index';
        }
        if (slug.startsWith('/en/')) {
          return slug.replace('/en/', '').replace('/', '');
        }

        return slug.replace(/^\/([^\/]*).*$/, '$1');
      };

      // cms doesn't support i18n in file collections, therefore extracting footer to separate file
      // but no extra page is needed for it
      // https://github.com/netlify/netlify-cms/pull/4487
      if (getNodeDir() === 'footer') {
        return;
      }

      createPage({
        path: slug,
        component: path.resolve(
          `src/templates/${String(getNodeDir())}.js`
        ),
        // additional data passed via context
        context: {
          id,
          language: frontmatter.language
        },
      });
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);
  languages.forEach((lang) => {
    createPage({
      ...page,
      path: lang !== baseLang ? `/${lang}${page.path}` : page.path,
      context: {
        ...page.context,
        language: lang,
      },
    })
  });
};

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node); // convert image paths for gatsby images
};
