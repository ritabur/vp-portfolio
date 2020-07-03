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
//                     audioImage
//                     shortDescription
//                     title
//                 }
//             }
//         }
//     }
// }
