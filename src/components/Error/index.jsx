import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import './styles.scss';


function Error({ onClose }) {
  const handleCloseError = () => {
    onClose();
  }
  return (
    <div className="error-container">
      <span>Usuário não existe no github.</span>
      <button type="button" onClick={handleCloseError}>
        <AiOutlineClose size={25} />
      </button>
    </div>
  );
}

export default Error;