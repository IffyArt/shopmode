import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import PreviewPage from './pages/PreviewPage';
import ProductPage from './pages/ProductPage';
import './styles/globals.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='cart' element={<CartPage />} />
        <Route path='preview' element={<PreviewPage />} />
        <Route path='product' element={<ProductPage />} />
        <Route path='*' element={<h1>此頁面正在建置中</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
