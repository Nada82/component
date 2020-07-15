import React from 'react';
import Pic from './profile/ProfilePhoto';
import FullName from './profile/FullName';
import Address from './profile/Address';
import './App.css'; 

function App() {
  return (
    <div className="bg">
    <FullName />
    <Pic />
    <Address/>
    </div>
  );
}

export default App;