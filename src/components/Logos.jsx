import React from 'react';
import styles from '../styles/Logos.module.css';
import apple from '../images/apple1.png';
import dell from '../images/Dell.png';
import hp from '../images/hp.png';

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <img src={apple} alt="logo" />
            <img src={dell} alt="logo" />
            <img src={hp} alt="logo" />
        </div>
    );
}

export default Logos;