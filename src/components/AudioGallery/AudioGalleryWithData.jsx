import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { AudioGallery } from './AudioGallery';

export const AudioGalleryWithData = ({ featuredEntries }) => {
  const featuredEntryNames = featuredEntries.map(item => [...item.items]);
  const itemsToFetch = [].concat(...featuredEntryNames);

  // TODO: gatsby useStaticQuery doesn't accept variables: https://github.com/gatsbyjs/gatsby/issues/10482,
  // so we need to filter entries manually
  const data = useStaticQuery(graphql`
    query GalleryQuery {
      allMarkdownRemark(
        limit: 1000
        filter: {
          frontmatter: {
            templateKey: { in: ["audio-post", "story"] }
          }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 850) {
                    aspectRatio
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    allMarkdownRemark: { edges },
  } = data;

  const galleryEntries = edges.filter(item => {
    return itemsToFetch.find(title => title === item.node.frontmatter.title);
  });

  const galleryEntriesFormatted = galleryEntries.map(({ node }) => {
    const {
      fields: { slug },
      frontmatter: {
        title,
        image: { childImageSharp },
      },
    } = node;

    return {
      slug,
      image: childImageSharp,
      title,
    };
  });

  return <AudioGallery galleryList={galleryEntriesFormatted} />;
};
