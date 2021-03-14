import React, { useState } from 'react';

import { BiSearchAlt } from 'react-icons/bi';
import Logo from '../../assets/LogoCompasso.svg';
import BackgroundImage from '../../assets/background-image.svg';

import api from '../../services/api';

import './styles.scss';
import Error from '../../components/Error';
import { useHistory } from 'react-router';

function Home() {
  const [username, setUsername] = useState('');
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const closeError = () => {
    setIsError(false);
  }

  const handleSearchUser = async () => {
    if(!username) {
      alert('o nome do usuário não pode ser vazio!');
      return;
    }

    try{
      const response = await api.get(`/users/${username}`);
      const user = response.data;
      localStorage.setItem('@githubfinder:user', JSON.stringify(user));
      history.push('/dashboard');
    } catch(err) {
      setIsError(true);
      console.log(err);
    }
  }
  return (
    <section className="home-container">
      <section className="home-content">
        <header>
          <img src={Logo} alt="Logo Compasso" />
        </header>

        <main className="main">
          <div className="main-content">
            <p>
              Uma <strong>Forma Fácil</strong> de encontrar os repositórios 
              do github.     
            </p>

            <div className="search-box">
              <div className="input-container">
                <BiSearchAlt />
                <input 
                  type="text" 
                  name="search" 
                  onChange={event => setUsername(event.target.value)} 
                />
              </div>
              <button type="submit" onClick={handleSearchUser}>
                Buscar
              </button>
            </div>
            {isError && <Error onClose={closeError} />}
          </div>
          <div className="background-image">
            <img src={BackgroundImage} alt="Background"/>
          </div>
        </main>
      </section>
    </section>
  );
}

export default Home;