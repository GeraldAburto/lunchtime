import React from 'react';

const Menu = ({ menu }) => {
    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>Today's menu</h4></li>
            {
                menu && menu.length > 0 ?
                    menu.map((item, i) => (<li key={i} className='collection-item'> {item}</li>)) :
                    <li className='collection-item'>Menu not available.</li>
            }
        </ul>
    );
};

export default Menu;