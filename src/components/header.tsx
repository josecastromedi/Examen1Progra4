import React from 'react';

function Header() {
  return (
    <header className="flex">
      <div className="logotipo">
        <img src="/logotipo.jpg" alt="Emblema de la aplicacion" width="100" />
      </div>
      <nav className="flex item-center">
      <ul className="flex list-style-none justify-end items-center">
            <li className="mx-2">
                <a href="#">Home</a>
            </li>
            <li className="mx-2">
                <a href="#">About us</a>
            </li>
            <li className="mx-2">
                <a href="#">Contact us</a>
            </li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
