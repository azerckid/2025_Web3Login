import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/login/Login';
import SignIn from '../pages/signin/SignIn';
import Products from '../pages/products/Products';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: 'signin',
                element: <SignIn />,
            },
            {
                path: 'products',
                element: (
                    <ProtectedRoute>
                        <Products />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]); 