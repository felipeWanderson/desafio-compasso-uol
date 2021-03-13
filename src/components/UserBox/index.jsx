import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import './styles.scss';

function UserBox({ user }) {
  return (
    <section className="user-box-container">
      <div className="user-box-content">
        <div className="user">
          <img src={user.avatar_url} alt={user.name} />
          <p>
            <strong>{user.name}</strong>
            <span>{user.bio}</span>
          </p>
        </div>
        <button>
          <BiRightArrow size={20} color="#666"/>
        </button>
        <footer>
          <button>Repositórios</button>
          <button>Stars</button>
        </footer>
      </div>
    </section>
  );
}

export default UserBox;