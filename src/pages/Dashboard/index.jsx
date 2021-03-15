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
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const userData = localStorage.getItem('@githubfinder:user');
    setUser(JSON.parse(userData));
  }, []);
  const handleRepositories = async () => {
    setStelected('repository');
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${user.login}/repos`);
      if(!response.ok) {
        throw Error(response.status);
      }
      const repositories = await response.json();
      setRepositories(repositories);
    } catch (error) {
      if(error) {
        if(error.message === '404') {
          alert('nao foi possivel achar os repositorios');
        } else {
          alert('Falha de Conexão, verifique sua internet');
        }
      }
    }finally {
      setLoading(false);
    } 
  };
  
  const handleStarred = async () => {
    setStelected('starred');
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${user.login}/starred`);
      if(!response.ok) {
        throw Error(response.status);
      }
      const starreds = await response.json();
      setStarred(starreds);
    } catch (error) {
      if(error.message === '404') {
        alert('nao foi possivel achar os repositorios mais visitados');
      } else {
        alert('Falha de Conexão, verifique sua internet');
      }
    } finally {
      setLoading(false);
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
          loading ? (
            <div className="dashboard-content">
              <p>Carregando....</p>
            </div>
          ): selected === 'starred' ? (
            <List title="Repositórios mais visitados" data={starreds} />
          ): selected === 'repository' ? (
            <List title="Repositórios" data={repositories} />
          ): null
        }
      </main>
    </section>
  );
}

export default Dashboard;