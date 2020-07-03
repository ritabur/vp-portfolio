import * as React from 'react';

// audio item like a single story
const Audio1 = () => (
    <div>ladida</div>
);

export default Audio1;
// LIST:
// query MyQuery {
//     allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "audio1"}}}) {
//         edges {
//             node {
//                 id
//                 fields {
//                     slug
//                 }
//                 frontmatter {
//                     image
//                     shortDescription
//                     title
//                 }
//             }
//         }
//     }
// }

// HOME:
// query MyQuery {
//     allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "index"}}}) {
//         edges {
//             node {
//                 id
//                 fields {
//                     slug
//                 }
//                 frontmatter {
//                     featuredEntries {
//                         items
//                         type
//                     }
//                 }
//             }
//         }
//     }
// }

// ONE AUDIO ENTRY:
// query IndexTemplate {
//     markdownRemark(frontmatter: {title: {eq: "one more audio"}}) {
//         frontmatter {
//             image
//             shortDescription
//             title
//         }
//     }
// }
