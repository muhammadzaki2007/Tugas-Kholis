import React from 'react';
import './admin.css'; // Import CSS buat styling
import Sidebar from './sidebar';
import Header from './header';

const admin = () => {
    return (
        <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <h1 className='putih'>Pilih Dashboard untuk melihat preview CV saya</h1>
      </div>
    </div>
    
    );
}

export default admin;
