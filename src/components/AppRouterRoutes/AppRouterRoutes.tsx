import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Catalog } from '../../pages/Catalog';
import { Orders } from '../../pages/Orders';
import { CatalogItem } from '../../pages/CatalogItem';
import { NotFound } from '../../pages/NotFound';
import { Basket } from '../../pages/Basket';
import { Profile } from '../../pages/Profile';
import { Develop } from '../../pages/Develop';
import { OrderDetail } from '../../pages/OrderDetail';

export const AppRouterRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Catalog />}
            />
            <Route
                path="/catalog"
                element={<Catalog />}
            />
            <Route
                path="/catalog/:id"
                element={<CatalogItem />}
            />
            <Route
                path="/orders"
                element={<Orders />}
            />
            <Route
                path="/orders/:id"
                element={<OrderDetail />}
            />
            <Route
                path="/basket"
                element={<Basket />}
            />
            <Route
                path="/profile"
                element={<Profile />}
            />
            <Route
                path="/develop"
                element={<Develop />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
};
