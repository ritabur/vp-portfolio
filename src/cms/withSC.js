/* eslint-disable */
import * as React from 'react';
import { StyleSheetManager } from 'styled-components';

export default (Component) => (props) => {
  const iframe = document.querySelector('#nc-root iframe');
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  console.log('props', props);

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Component {...props} />
    </StyleSheetManager>
  );
};
