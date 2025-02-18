import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from '../../layout/Header';
import { Footer } from '../../layout/Footer';
import { Main } from '../../layout/Main';

import './App.scss';
import { AppRouterRoutes } from '../AppRouterRoutes';
// import { Provider } from 'react-redux';
// import { store } from '../../store';

export const App = () => {
    return (
        // <Provider store={store}>
        <Router>
            <Header />
            <Main>
                <AppRouterRoutes />
            </Main>
            <Footer />
        </Router>
        // </Provider>
    );
};
