import React from 'react';
import {
    Link,
  } from 'react-router-dom';

const Navbar = () => (
    <div>
        <ul className='navLink'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/works">Works</Link>
            </li>

        </ul>
    </div>
        
);
export default Navbar;