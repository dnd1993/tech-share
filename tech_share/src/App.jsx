import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './views/Home/SharedLayout';
import Home from './views/Home/Home';
import UseStateUpdate from './views/UseStateUpdate/UseStateUpdate';
import UseStateDerive from './views/UseStateDerive/UseStateDerive';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="example-one" element={<UseStateUpdate />} />
          <Route path="example-two" element={<UseStateDerive />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
