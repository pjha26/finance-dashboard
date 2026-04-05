import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check localStorage on mount
        const storedUser = localStorage.getItem('sovereign_auth_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email, password) => {
        // Simulated async network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Mock successful authentication
        const fakeUser = {
            id: 'usr_0x78aF923',
            email: email,
            role: 'Elite Member',
            token: 'jwt-mock-token-xyz'
        };

        setUser(fakeUser);
        localStorage.setItem('sovereign_auth_user', JSON.stringify(fakeUser));
        navigate('/dashboard');
    };

    const signup = async (email, password, fullName) => {
        // Simulated async network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // Mock successful registration
        const fakeUser = {
            id: `usr_0x${Math.floor(Math.random() * 100000)}`,
            email: email,
            fullName: fullName,
            role: 'Elite Member',
            token: 'jwt-mock-token-xyz'
        };

        setUser(fakeUser);
        localStorage.setItem('sovereign_auth_user', JSON.stringify(fakeUser));
        navigate('/dashboard');
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('sovereign_auth_user');
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
