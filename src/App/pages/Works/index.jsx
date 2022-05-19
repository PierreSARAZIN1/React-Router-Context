import React from 'react';
import {
    Link,
    Outlet
  } from 'react-router-dom';
  
  const Works = () => (
    <div>
        <h1>Projets</h1>
        <h3>" Au fil des années, nous avons pu accompagner les meilleurs. "</h3>
        <p>Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.</p>
        <ul className='workList'>
            <li>
            <Link to="/works/platon-study-case">Platon</Link>
            </li>
            <li>
            <Link to="/works/solane-study-case">Solane</Link>
            </li>
            <li>
            <Link to="/works/sedal-study-case">Sedal</Link>
            </li>
        </ul>
        <Outlet />
     </div>
        
);
export default Works;