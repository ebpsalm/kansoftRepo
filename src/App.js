import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Category from './pages/category';
import Checkout from './pages/checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/category/:type' element={<Category />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
