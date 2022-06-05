import React, { Component } from 'react';
import styles from '../styles/Cards.module.css';
import Card from './Card';
import precision from '../images/7560.jpg';
import alienware from '../images/gaming.png';
import macbook from '../images/mac.jpg';
import zbook from '../images/zbook.jpg';


class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={precision} name="Dell Precision 7560" price="4000 $" />
                <Card image={macbook} name="MacBook Pro" price="6100 $" />
                <Card image={zbook} name="HP Zbook G3" price="1800 $" />
                <Card image={alienware} name="Dell Alienware" price="3500 $" />
            </div>
        );
    }
}

export default Cards;