import React, { createContext, useState } from 'react';

const UserContext = createContext();

const MyProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, MyProvider };
