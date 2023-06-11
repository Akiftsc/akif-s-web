import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import './index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Changelog from './Changelog';
import Blog from './blog/index';
import BlogPost from './blog/BlogPost';
import Layout from './blog/Layout';
import Skills from './components/Skills';
import Contact from './components/Contact';

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Layout />} >
          <Route index={true} element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Route >
        <Route path='/changelog' element={<Changelog />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


