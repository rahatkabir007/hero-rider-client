
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const location = useLocation()
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    if (user.email || admin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;