import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    const [role, setRole] = useState('admin'); // 'admin' or 'viewer'

    useEffect(() => {
        // Basic theme toggle
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    const toggleRole = () => setRole(prev => prev === 'admin' ? 'viewer' : 'admin');

    return (
        <AppContext.Provider value={{ theme, toggleTheme, role, toggleRole }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
