import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import App from './App';
import Deatiles from './Components/Deatiles/Deatiles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/deatiles' element={<Deatiles/>}/>
    </Routes>
  </Provider>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
