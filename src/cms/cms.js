import CMS from 'netlify-cms-app';

import withStyled from './withSC';

import AboutPagePreview from './PreviewTemplates/AboutPagePreview';

// to start adding custom previews:
// add `modulePath: `${__dirname}/src/cms/cms.js`,` to gatsby-config under `gatsby-plugin-netlify-cms` -> options

// admin styles not working:
// 1. netlify CMS not working with SC: https://github.com/netlify/netlify-cms/issues/793
// 2. components with 'useStaticQuery' like Footer breaking admin: https://github.com/gatsbyjs/gatsby/issues/21392

function smartRegisterPreviewTemplate(name, component) {
  // check styled-components
  try {
    require('styled-components');

    // admin styles not working https://github.com/netlify/netlify-cms/issues/793
    return CMS.registerPreviewTemplate(name, withStyled(component));
  } catch (error) {
    console.log(error);
  }

  // not using any css-in-js library
  CMS.registerPreviewTemplate(name, component);
}

// smartRegisterPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
