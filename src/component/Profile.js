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
                <button>Overview</button>
                <button><Link to="/About">About Me</Link></button>
                <button><Link to="/Skill">Skill&Pengalaman</Link></button>
            </nav>
            <div className="profile">
                Halo, Saya Ahmad, Saya Web Developer yang berdomisili di Kendal, 
                Saya menguasai HTML, dan CSS serta sedang mempelajari Javascript
            </div>
            <footer>
                <p>Author: Ahmad | mad81540@gmail.com</p>
            </footer>
        </div>
    );
}

export default Profile;
