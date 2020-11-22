import * as React from 'react';

import {BASE_LANGUAGE, languages} from 'const';

const AppContext = React.createContext({});

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({children}) => {
    React.useEffect(() => {
        const splitPath = location.pathname.split('/');
        const isLocalizedPath = Object.values(languages).includes(splitPath[1]);
        setLanguage(isLocalizedPath ? splitPath[1] : BASE_LANGUAGE);
    }, []);

    const setLanguage = (selectedLanguage) => {
        setState({
            ...state,
            selectedLanguage
        });
    };

    const initialState = {
        selectedLanguage: 'lt',
        setLanguage,
    };

    const [state, setState] = React.useState(initialState);

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
};
