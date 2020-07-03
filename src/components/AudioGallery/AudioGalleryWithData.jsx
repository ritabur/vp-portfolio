import * as React from 'react';
import {graphql, useStaticQuery} from "gatsby";

import { AudioGallery } from './AudioGallery';

export const AudioGalleryWithData = ({ featuredEntries }) => {
    const { items: itemsToFetch } = featuredEntries.reduce((accumulator, currentValue) => ([
        ...accumulator.items,
        ...currentValue.items,
    ]));

    // TODO: gatsby useStaticQuery doesn't accept variables: https://github.com/gatsbyjs/gatsby/issues/10482,
    // so we need to filter entries manually
    const data = useStaticQuery(graphql`
        query GalleryQuery {
            allMarkdownRemark(
                limit: 1000
                filter: { frontmatter: { templateKey: { in: ["audio1", "training", "story"] } }}
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

    const { allMarkdownRemark:   { edges } } = data;

    const galleryEntries = edges.filter(item => {
        return itemsToFetch.find(title => title === item.node.frontmatter.title)
    });

    const galleryEntriesFormatted = galleryEntries.map(({node}) => {
        const { fields: { slug }, frontmatter: { title, image: { childImageSharp, childImageSharp: { fluid: { aspectRatio }} } } } = node;

        return {
            ...(aspectRatio < 1 ? {portrait: true}: {landscape: true}),
            slug,
            image: childImageSharp,
            title,
        };
    });

    return (
            <AudioGallery galleryList={galleryEntriesFormatted} />
    );
};
