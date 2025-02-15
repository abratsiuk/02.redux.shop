import { Routes, Route } from 'react-router-dom';
import { Catalog } from '../../pages/Catalog';
import { Orders } from '../../pages/Orders';
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
