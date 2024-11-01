import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/icons/Start.png';

const OpenPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: '#B8DBD9', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src={img}
        alt="Start"
        style={{ maxWidth: '80%', maxHeight: '80%', cursor: 'pointer' }}
        onClick={() => navigate('/homepage')}
      />
    </div>
  );
};

export default OpenPage;