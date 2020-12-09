import { useAppContext } from 'context/AppContext';

import EnTranslations from 'translations/en.json';
import LtTranslations from 'translations/lt.json';

const translations = {
  en: EnTranslations,
  lt: LtTranslations,
};

export const t = (key) => {
  // TODO: don't use hooks here
  const { selectedLanguage } = useAppContext();

  if (selectedLanguage) {
    const translation = translations[selectedLanguage][key];
    if (translation) {
      return translation;
    }
    return key;
  }
  return null;
};
