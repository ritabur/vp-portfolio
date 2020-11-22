import { BASE_LANGUAGE } from 'const';

export const goHome = (selectedLanguage) => {
    return selectedLanguage !== BASE_LANGUAGE ? `/${selectedLanguage}/` : `/`;
};

export const getLocalizedPath = (path, selectedLanguage) => {
    return selectedLanguage !== BASE_LANGUAGE ? `/${selectedLanguage}/${path}` : `/${path}`;
};
