import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { setAuthentication } from './features/authentication';

const loadUser = () => {
  try {
    const authentication = localStorage.getItem('authentication');
    if (authentication) {
      store.dispatch(setAuthentication(JSON.parse(authentication)));
    }else {
      store.dispatch(setAuthentication(null));
    }

  } catch (error) {
    console.error(error);
  }
};

loadUser();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
