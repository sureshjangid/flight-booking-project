import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './assets/css/style.css';
import './index.css';
import Routes from './routes';
import store from "./redux/store"
import history from './routes/history';
import Loaders from './container/loader'

const { PUBLIC_URL } = process.env;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.Suspense fallback={<Loaders/>}>
      <BrowserRouter basename={PUBLIC_URL} history={history}>
        <Routes />
      </BrowserRouter>
  </React.Suspense>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
