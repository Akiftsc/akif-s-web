import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Changelog from './Changelog';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/changelog' element={<Changelog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


