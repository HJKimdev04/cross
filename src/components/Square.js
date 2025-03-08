import React from 'react';
import '../styles/Square.css'

const Square = ({ isBlack, onChange }) => {
    return (
        <div className={`square ${isBlack ? 'black' : ''}`}>
            {!isBlack && <input type="text" maxLength="1" onChange={onChange} />}
        </div>
    );
};

export default Square;