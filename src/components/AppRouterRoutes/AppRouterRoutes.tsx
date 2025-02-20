import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Catalog } from '../../pages/Catalog';
import { Orders } from '../../pages/Orders';
import { CatalogItem } from '../../pages/CatalogItem';
import { NotFound } from '../../pages/NotFound';

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
                path="*"
                element={<NotFound />}
            />
        </Routes>
    );
};
