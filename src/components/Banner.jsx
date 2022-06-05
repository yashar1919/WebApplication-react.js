import React from 'react';
import styles from '../styles/Banner.module.css';
import banner from '../images/react.png';

const Banner = () => {
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={banner} alt="banner of site" />
            <div className={styles.textContainer}>
                <h1>WebPage by YASHAR</h1>
                <p>I am learning<br/> <span>React.js</span></p>
            </div>
        </div>
    );
}

export default Banner;