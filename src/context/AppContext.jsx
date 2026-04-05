import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Persist theme in localStorage, default to 'light'
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('findash-theme') || 'light';
    });
    const [role, setRole] = useState('admin');

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('findash-theme', theme);
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
