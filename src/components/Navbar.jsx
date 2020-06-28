import React, { useContext } from 'react';
import {BookContext} from '../contexts/BookContext'

const NavBar = () => {
    const {books}= useContext(BookContext)
    return (
        <div className='navbar'>
            <h1>Readin' list</h1>
            <p>Currently you have {books.length} books to get through</p>
        </div>
    );
}

export default NavBar;