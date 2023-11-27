import { createContext, useState } from 'react';

export const initianContext = {
    luckyNumber: 0,
    updateLuckyNumber: () => {},
};

export const GlobalContext = createContext(initianContext);

export function ContextWrapper(props){
    const [luckyNumber, setLuckyNumber] = useState(initianContext.luckyNumber);

    function updateLuckyNumber(newNumber){
        setLuckyNumber(newNumber)
    }
    const value = {
        luckyNumber,
        updateLuckyNumber,
    };

    return(
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    );
}