import React from 'react';
import { Routes, Link } from '@fast-admin/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Link to="/billing">Billing</Link>
        <Link to="/users">Users</Link>
      </Routes>
    </div>
  );
}

export default App;
