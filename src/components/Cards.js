import React, { Component } from 'react';
import styles from '../styles/Cards.module.css';
import Card from './Card';
import precision from '../images/7560.jpg';
import alienware from '../images/gaming.png';
import macbook from '../images/mac.jpg';
import zbook from '../images/zbook.jpg';


class Cards extends Component {
    state = {
        laptopData: [
            { id: 1, image: precision, name: "Dell Precision 7560", price: "4000 $" },
            { id: 2, image: macbook, name: "MacBook Pro", price: "6100 $" },
            { id: 3, image: zbook, name: "HP Zbook G3", price: "1800 $" },
            { id: 4, image: alienware, name: "Dell Alienware", price: "3500 $" }
        ]
    }
    render() {
        const { laptopData } = this.state;
        return (
            <div className={styles.container}>
                {/* <Card image={precision} name="Dell Precision 7560" price="4000 $" />
                <Card image={macbook} name="MacBook Pro" price="6100 $" />
                <Card image={zbook} name="HP Zbook G3" price="1800 $" />
                <Card image={alienware} name="Dell Alienware" price="3500 $" /> */}

                {/* 4khatte bala ro kholase kardim o omadim data ro rikhtim too state o hamasho yekja ba map khoondim */}
                {laptopData.map(laptop => <Card key={laptop.id} image={laptop.image} name={laptop.name} price={laptop.price} />)}
            </div>
        );
    }
}

export default Cards;