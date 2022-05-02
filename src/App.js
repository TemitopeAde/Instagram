import React from 'react';
import { Routes } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import './App.css';
// import ProductDetails from './pages/ProductDetails';
// import Product from './pages/Product';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/products/:id' element={<Product />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App