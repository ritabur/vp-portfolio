import { navigate } from 'gatsby';

import { BASE_LANGUAGE, languages } from 'const';

export const goHome = (selectedLanguage) => {
  return selectedLanguage !== BASE_LANGUAGE ? `/${selectedLanguage}/` : `/`;
};

export const getLocalizedPath = (path, selectedLanguage) => {
  // console warnings: https://github.com/gatsbyjs/gatsby/issues/11243
  return selectedLanguage !== BASE_LANGUAGE
    ? `/${selectedLanguage}/${path}`
    : `/${path}`;
};

export const routeToPage = (language) => {
  const isLocalizedUrl = Object.values(languages).includes(
    window.location.pathname.split('/')[1]
  );

  const splitPaths = window.location.pathname.split('/').filter(Boolean);

  const navigateToLocalizedPath = () => {
    splitPaths.splice(0, 1);
    // case: url is already with a lang prefix
    if (isLocalizedUrl) {
      splitPaths.splice(0, 1);
      const pathWithoutLang = splitPaths.join('/');
      return navigate(`/${language}/${pathWithoutLang}`);
    }
    // https://github.com/netlify/netlify-cms/issues/857
    if (
      window.location.pathname.includes('/audio-post/') ||
      window.location.pathname.includes('/story/')
    ) {
      return navigate('/');
    }
    return navigate(`/${language}${window.location.pathname}`);
  };

  const navigateToBaseLangPath = () => {
    // remove language and go to path e.g. /en/contact -> /contact/
    if (isLocalizedUrl) {
      splitPaths.splice(0, 1);
      const pathWithoutLang = splitPaths.join('/');
      return navigate(`/${pathWithoutLang}`);
    }

    // or story||audio -> homepage
    return navigate('/');
  };

  language === BASE_LANGUAGE
    ? navigateToBaseLangPath()
    : navigateToLocalizedPath();
};
