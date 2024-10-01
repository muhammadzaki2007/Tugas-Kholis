import React, { useState, useEffect } from 'react';
// import Navigation from './Navigation';
import './Style.css'; // Import CSS buat styling
import { Link } from "react-router-dom";

function Card() {
    const [content, setContent] = useState({ name: '', work: '' });
  
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('http://localhost:3001/api/cv/get/1'); // Ganti path jadi /get
        const data = await response.json();
        setContent(data.content);
      }
      fetchData();
    }, []);
  
    return (
        <div className="card">
            <header>
                <h1>Curiculum Vitae</h1>
                <p>Posted by Ahmad</p>
            </header>
            

            <nav>
                <button>Home</button>
                <button className="btn btn-neutral-content">
                    <Link to="/Profile">Overview</Link>
                  </button>
                <button className="btn btn-neutral-content">
                    <Link to="/AboutMe">About Me</Link></button>
                <button className="btn btn-neutral-content">
                    <Link to="/SkillKeterampilan">Skill&Pengalaman</Link></button>
            </nav>
            <div className="profile">
                <img src="https://yt3.googleusercontent.com/FRowCi1sR0TsZ4Gfs0UwSrsshhwdedzTVELaguf7QhOnkZEdGqwuyJm0Ud2WdOmLELVoGl4c=s900-c-k-c0x00ffffff-no-rj" alt="Profile" />
                <h2>{content.name}</h2>
                <h3>{content.work}</h3>
            </div>
            <footer>
                <p>Author: Ahmad | mad81540@gmail.com</p>
            </footer>
        </div>
    );
}

export default Card;
