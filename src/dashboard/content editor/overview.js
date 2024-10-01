import React, { useState } from 'react';
import './edit.css';

const Home = () => {
  const [overview, setoverview] = useState('');
  const [rumahList, setRumahList] = useState([]);

  const handleAdd = () => {
    setRumahList([...rumahList, { overview }]);
    setoverview('');
  };

  return (
    <div className="dashboard-rumah">
      <h2 className='putih'>Dashboard Overview</h2>
      
      <div className="form">
        <h3 className='putih'>Tambah Data</h3>
        <textarea
          placeholder="Overview"
          value={overview}
          onChange={(e) => setoverview(e.target.value)}
        ></textarea>
        <button onClick={handleAdd}>Add</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Overview</th>
          </tr>
        </thead>
        <tbody>
          {rumahList.map((profil, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className='putih'>{profil.overview}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
