import CMS from 'netlify-cms-app';

import withStyled from './withSC';

import AboutPagePreview from './PreviewTemplates/AboutPagePreview';

// admin styles not showing: https://github.com/netlify/netlify-cms/issues/793
function smartRegisterPreviewTemplate(name, component) {
    // check styled-components
    try {
        require("styled-components");

        return CMS.registerPreviewTemplate(name, withStyled(component));
    } catch (error) {
        console.log('styled-components not loaded:', error);
    }

    // not using any css-in-js library
    CMS.registerPreviewTemplate(name, component);
}

smartRegisterPreviewTemplate('about', AboutPagePreview);
