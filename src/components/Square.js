import React from 'react';
import '../styles/Square.css'; 

const Square = ({ isBlack, onChange }) => {
    return (
        <div className={`square ${isBlack ? 'black' : 'white'}`}>
            {!isBlack && (
                <input
                    type="text"
                    maxLength={1} 
                    onChange={onChange}
                    className="square-input"
                />
            )}
        </div>
    );
};

export default Square;
