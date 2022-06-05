import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../images/reactLogo.png'; //esme logo k neveshtim, har esme dg ham mitoone bashe

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div>
                <img className={styles.logo} src={logo} alt="Logo could not be loaded"/>
            </div>

        </header>
    );
}

export default Navbar;