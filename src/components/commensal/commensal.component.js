import React from 'react';

const Commensal = ({ id, avatar, name, food, handleOnRemove }) => {
    return (
        <li className="collection-item avatar">
            <img src={avatar} alt={name} className='circle' />
            <span className='title'>{name}</span>
            <p>
                {food}
            </p>
            <a href='#/' onClick={handleOnRemove.bind(this, id)} className="secondary-content"><i className="material-icons">close</i></a>
        </li>
    );
};

export default Commensal;