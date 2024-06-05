import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Dashboard = () => {
    const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Dashboard, {user ? user.name : 'Guest'}!</h1>
        </div>
    );
};

export default Dashboard;
