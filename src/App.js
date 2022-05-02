import React from 'react';
import Carousel from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import { Routes } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App