import React, { useState } from 'react';

import './styles.scss';


function Header() {
  const [user,] = useState(() => {
    const userData = localStorage.getItem('@githubfinder:user');
    if(userData) {
      return JSON.parse(userData);
    }
    return {};
  });
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={user.avatar_url} alt={user.name}/>
        <div>
          <strong>{user.name}</strong>
          <span>{user.bio}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;