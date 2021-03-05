import * as React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/lt';
import 'dayjs/locale/en';

import { BASE_LANGUAGE, languages } from 'const';

const AppContext = React.createContext({});

export const useAppContext = () => React.useContext(AppContext);

// TODO: rethink context setting (check eslint)
export const AppContextProvider = ({ children }) => {
  React.useEffect(() => {
    const splitPath = window.location.pathname.split('/');
    const isLocalizedPath = Object.values(languages).includes(splitPath[1]);
    setLanguage(isLocalizedPath ? splitPath[1] : BASE_LANGUAGE);
  }, []); // eslint-disable-line

  const setLanguage = (selectedLanguage) => {
    setState({
      ...state,
      selectedLanguage,
    });
  };

  const initialState = {
    selectedLanguage: '',
    setLanguage,
  };

  const [state, setState] = React.useState(initialState);

  dayjs.locale(state.selectedLanguage);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
