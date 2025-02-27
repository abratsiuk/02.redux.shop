import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { Main } from '../../layout/Main';

import './App.scss';
import { AppRouterRoutes } from '../AppRouterRoutes';
import { Provider } from 'react-redux';
import { store, persistor } from '../../store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
    return (
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                <Router>
                    <Header />
                    <Main>
                        <AppRouterRoutes />
                    </Main>
                    <Footer />
                </Router>
            </PersistGate>
        </Provider>
    );
};
