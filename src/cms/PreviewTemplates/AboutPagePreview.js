import React from 'react';
import About from 'templates/about';

const AboutPagePreview = props => {
  const bla = props.entry.getIn(['data']).toJS();

  // var image = props.entry.getIn(['data', 'mainImage', 'image']);
  const bg = props.getAsset(bla.image);

  const data = {
    markdownRemark: {
      frontmatter: {
        title: 'test',
        mainImage: {
          image: bg,
          alt: 'alt',
        },
      },
      html: 'test',
    },
  };

  return (
    <About
      // title={data.title}
      // html={data.body}
      // image={getAsset(entry.getIn(['data', 'image']))}
      // alt={data.alt}
      data={data}
    />
  );
};

export default AboutPagePreview;
