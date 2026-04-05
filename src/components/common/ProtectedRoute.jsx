import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        // Redirect to the login page if not heavily authenticated
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
