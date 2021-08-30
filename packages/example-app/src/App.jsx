import React from 'react';
import { Routes, Link } from '@fast-admin/core';

import './App.css';

const pageModules = import.meta.glob('./pages/*.jsx');

function App() {
  return (
    <div className="App">
      <Routes pageModules={pageModules}>
        <Link to="/billing">Billing</Link>
        <Link to="/users">Users</Link>
      </Routes>
    </div>
  );
}

export default App;
