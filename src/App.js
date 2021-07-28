import React from 'react';
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
    <Sidebar/>
    <Feed/>
    <Widgets/>
    </div>
  );
}

export default App;
