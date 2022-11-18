import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './views/Home/SharedLayout';
import Home from './views/Home/Home';
import UseStateUpdate from './views/UseStateUpdate/UseStateUpdate';
import UseStateDerive from './views/UseStateDerive/UseStateDerive';
import Resources from './views/Resources/Resources';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="example-one" element={<UseStateUpdate />} />
          <Route path="example-two" element={<UseStateDerive />} />
          <Route path="resources" element={<Resources />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
