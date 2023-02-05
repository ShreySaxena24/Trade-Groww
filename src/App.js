/*eslint-disable*/
import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Login, Footer,Signup } from './containers';
import Home from './home';
import './App.css';
import { UserProvider } from './contexts/user.context';

const App = () => (
  <BrowserRouter>
  <div className="App">
    <div className="gradient__bg">
    <UserProvider>
       <Routes>
         <Route exact path="/login" element={<Login />} />
         <Route exact path="/signup" element={<Signup />} />
           <Route exact path="/" element={<Home />} />
       </Routes>
     </UserProvider>
    </div>
    <Footer />
  </div>
  </BrowserRouter>
);

export default App;
