import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './common/js/rem'
import App from './App';
import store from './store/index'

render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
     </Provider>
    ,
    document.querySelector('#apps')
)