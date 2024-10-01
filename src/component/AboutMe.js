import React from 'react';
// import Navigation from './Navigation';
import './Style.css'; // Import CSS buat styling
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="card">
            <header>
                <h1>Curiculum Vitae</h1>
                <p>Posted by Ahmad</p>
            </header>
            <nav>
                <button className="btn btn-neutral-content">
                    <Link to="/">Home</Link>
                </button>
                <button><Link to="/Profile">Overview</Link></button>
                <button>About me</button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <h2>Nama: Ahmad</h2>
            <div className="profile">
            Halo! Saya adalah seorang pemula yg mempelajari HTML, CSS, dan JavaScript
            </div>
            <footer>
                <p>Author: Ahmad | mad81540@gmail.com</p>
            </footer>
        </div>
    );
}

export default Profile;
