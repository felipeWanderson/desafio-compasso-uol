import React from 'react';

import './styles.scss';

function List({ title, data }) {
  return (
    <div className="list-container">
      <h2>{title}</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <img 
              src={item.owner.avatar_url} 
              alt={item.owner.login}
            />
            <div>
              <header>
                <span>{item.full_name}</span>
              </header>
              <div>
                <p>
                  {item.description}
                </p>
                <a href={item.html_url} target="_blank" rel="noopener noreferrer">
                  Ver no github
                </a>
              </div>
              
            </div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default List;