import React from 'react';
import { render } from 'react-dom';
import { HashRouter, BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import './common/js/rem'
import App from './App';
import store from './store/index'

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
     </Provider>
    ,
    document.querySelector('#app')
)