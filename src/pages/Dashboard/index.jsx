import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import List from '../../components/List';

import './styles.scss';


function Dashboard() {
  const [repositories, setRepositories] = useState([]);
  const [starreds, setStarred] = useState([]);
  const [user, setUser] = useState({});
  const [selected, setStelected] = useState('');
  
  useEffect(() => {
    const userData = localStorage.getItem('@githubfinder:user');
    setUser(JSON.parse(userData));
  }, []);
  const handleRepositories = async () => {
    setStelected('repository');
    try {
      const response = await fetch(`https://api.github.com/users/${user.login}/repos`);
      if(!response.ok) {
        throw Error(response.status);
      }
      const repositories = await response.json();
      setRepositories(repositories);
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleStarred = async () => {
    setStelected('starred');
    try {
      const response = await fetch(`https://api.github.com/users/${user.login}/starred`);
      if(!response.ok) {
        throw Error(response.status);
      }
      const starreds = await response.json();
      setStarred(starreds);
    } catch (error) {
      console.log(error);
    }
  }; 
  return (
    <section className="dashboard-container">
      <Header />
      <main className="dashboard-content">
        <header>
          <button 
            className={`btn ${selected === 'repository' ? 'active': ''}`} 
            onClick={handleRepositories}
          >
            Repositórios
          </button>
          <button 
            className={`btn ${selected === 'starred' ? 'active': ''}`} 
            onClick={handleStarred}>
              mais visitados
            </button>
            <button className="btn">
              <Link to="/">
                Nova busca
              </Link>
            </button>
        </header>
        { 
          selected === 'repository' 
          && <List title="Repositórios" data={repositories} />
        }

        {
          selected === 'starred' 
          && <List title="Repositórios mais visitados" data={starreds} />
        }
      </main>
    </section>
  );
}

export default Dashboard;