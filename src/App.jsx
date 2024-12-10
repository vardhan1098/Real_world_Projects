import React from 'react';
import Nav from './Projects/Nav';
import Dashboard from './Projects/Dashboard';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import Details from './Projects/Details';
import CartItems from './Projects/CartItems';

const App = () => {
  return (
    <>
     <Nav/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/cart' element={<CartItems/>}/>
     </Routes>
    </>
  );
};

export default App;