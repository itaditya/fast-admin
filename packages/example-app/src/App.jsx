import React from 'react';
import { Setup, Styles, AppLayout, Routes, Link } from '@fast-admin/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <Setup>
        <Styles />
        <AppLayout>
          <Link to="/billing">Billing</Link>
          <Link to="/users">Users</Link>
          <Routes />
        </AppLayout>
      </Setup>
    </div>
  );
}

export default App;
