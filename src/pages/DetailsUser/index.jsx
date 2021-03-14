import React, { useEffect, useState } from 'react';

import './styles.scss';

function DetailsUser() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const userData = localStorage.getItem('@githubfinder:user');
    setUser(JSON.parse(userData));
  }, []);
  return (
    <section className="details-user-container">
      <div  className="detais-user-content">
        <img 
          src={user.avatar_url} 
          alt={user.name}
        />
        <div>
          <span>{user.name}</span>
          <span>{user.bio}</span>
          <span>{user.company}</span>
          <span>{user.location}</span>
          <p>
            <span>Seguidores: {user.followers}</span>
            <span>Seguindo: {user.following}</span>
          </p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Ver perfil no github!  
          </a> 
        </div>
      </div>
    </section>
  );
}

export default DetailsUser;