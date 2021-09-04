import React from 'react';
import { Setup, Styles, AppLayout, Routes } from '@fast-admin/core';

import './App.css';

function App() {
  return (
    <div className="App">
      <Setup>
        <Styles />
        <AppLayout>
          <Routes />
        </AppLayout>
      </Setup>
    </div>
  );
}

export default App;
