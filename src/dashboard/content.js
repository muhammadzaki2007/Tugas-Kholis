import React, { useState } from 'react';
import './admin.css'; // Import CSS buat styling
import Sidebar from './sidebar';
import Header from './header3';
import Card from './content editor/home'; // Asumsi Card adalah Home
import Overview from './content editor/overview';
import AboutMe from './content editor/aboutme';
import Skills from './content editor/skill';

const Konten = () => {
  const [activeTab, setActiveTab] = useState('home'); // Defaultnya Home

    // Fungsi buat render konten dinamis
    const renderContent = () => {
        switch(activeTab) {
            case 'overview':
                return <Overview />;
            case 'about':
                return <AboutMe />;
            case 'skills':
                return <Skills />;
            default:
                return <Card />; // Home by default
        }
    }

    return (
        <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="tab-buttons">
                    <button onClick={() => setActiveTab('home')}>Home</button>
                    <button onClick={() => setActiveTab('overview')}>Overview</button>
                    <button onClick={() => setActiveTab('about')}>About Me</button>
                    <button onClick={() => setActiveTab('skills')}>Skill & Pengalaman</button>
                </div>

                {/* Konten dinamis yang berubah sesuai tombol yang diklik */}
                <div className="content">
                    {renderContent()}
                </div>
      </div>
    </div>
    );
}

export default Konten;
