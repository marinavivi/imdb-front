import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '../components/Router';
import store from '../store/index';
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Provider>

    )
}
export default App;