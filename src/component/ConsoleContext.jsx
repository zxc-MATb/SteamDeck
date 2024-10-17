import React, { createContext, useContext, useState } from 'react';

const ConsoleContext = createContext();

export const ConsoleProvider = ({ children }) => {
    const [isConsoleOn, setIsConsoleOn] = useState(false);

    const toggleConsole = () => {
        setIsConsoleOn(prev => !prev);
        console.log(`Консоль ${isConsoleOn ? 'выключается' : 'включается'}`);
    };

    return (
        <ConsoleContext.Provider value={{ isConsoleOn, toggleConsole }}>
            {children}
        </ConsoleContext.Provider>
    );
};

export const useConsole = () => {
    return useContext(ConsoleContext);
};
