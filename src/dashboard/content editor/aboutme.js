import React, { useState } from 'react';
import './edit.css';

const Home = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rumahList, setRumahList] = useState([]);

  const handleAdd = () => {
    setRumahList([...rumahList, { name, description }]);
    setName('');
    setDescription('');
  };

  return (
    <div className="dashboard-rumah">
      <h2 className='putih'>Dashboard Tentang Saya</h2>
      
      <div className="form">
        <h3 className='putih'>Tambah Data</h3>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAdd}>Add</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {rumahList.map((rumah, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className='putih'>{rumah.name}</td>
              <td className='putih'>{rumah.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
