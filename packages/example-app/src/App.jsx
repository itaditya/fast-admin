import React from 'react';
import { Setup, Routes, Link } from '@fast-admin/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <Setup>
        <Link to="/billing">Billing</Link>
        <Link to="/users">Users</Link>
        <Routes />
      </Setup>
    </div>
  );
}

export default App;
