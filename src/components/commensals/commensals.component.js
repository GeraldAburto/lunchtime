import React from 'react';
import Commensal from '../commensal/commensal.component';

const Commensals = ({ commensals, handleOnRemove }) => {

    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4>Commensals</h4></li>
                {
                    commensals && commensals.length > 0 ?
                        commensals.map(({ avatar, name, food }, i) => <Commensal key={i} id={i} avatar={avatar} name={name} food={food} handleOnRemove={handleOnRemove} />) :
                        <li className='collection-item'>Wow, such empty.</li>
                }
            </ul>
        </div>
    );
};

export default Commensals;