import * as React from 'react';
import { AppContextProvider } from './src/context/AppContext';

export const wrapRootElement = ({ element }) => {
  return <AppContextProvider>{element}</AppContextProvider>;
};
