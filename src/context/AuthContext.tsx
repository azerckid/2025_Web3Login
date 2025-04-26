import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    account: string | null;
    login: (account: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    account: null,
    login: () => { },
    logout: () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [account, setAccount] = useState<string | null>(null);

    const login = (account: string) => {
        setIsAuthenticated(true);
        setAccount(account);
    };
    const logout = () => {
        setIsAuthenticated(false);
        setAccount(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, account, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext); 