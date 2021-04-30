import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <div className='app'>
                <App />
            </div>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
