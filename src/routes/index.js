import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Dashboard from '../pages/Dashboard';
import Authentication from '../hooks/Authentication';
import Services from '../pages/Services';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/dashboard" element={
                <Authentication>
                    <Dashboard />
                </Authentication>
            } />
            <Route path="/services" element={
                <Authentication>
                    <Services />
                </Authentication>
            } />
        </Routes>
    );
};

export default AppRoutes;
