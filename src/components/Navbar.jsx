import React from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../images/reactLogo.png'; //esme logo k neveshtim, har esme dg ham mitoone bashe
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div>
                <ul className={styles.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/">About Us</Link></li>
                </ul>
            </div>

            <div>
                <img className={styles.logo} src={logo} alt="Logo could not be loaded" />
            </div>

        </header>
    );
}

export default Navbar;