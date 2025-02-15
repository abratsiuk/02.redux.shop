import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { Main } from '../../layout/Main';

import './App.scss';
import { AppRouterRoutes } from '../AppRouterRoutes';

export const App = () => {
    return (
        <Router>
            <Header />
            <Main>
                <AppRouterRoutes />
            </Main>
            <Footer />
        </Router>
    );
};
