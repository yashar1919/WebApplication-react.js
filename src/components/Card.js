import React, { Component } from 'react';
import styles from '../styles/Card.module.css';
import down from "../images/down.svg";
import up from "../images/up.svg";


class Card extends Component {

    state = {
        counter: 0
    }

    render() {
        const { image, name, price } = this.props;
        const { counter } = this.state;

        return (
            <div className={styles.container}>
                <img src={image} alt="laptop" />
                <h3>{name}</h3>
                {/* <p>{price} {counter > 1 && `x ${counter} = ${counter * Number(price.split(" ")[0])}$`}</p> */}
                <p>{price} {counter > 1 ? `x ${counter} = ${counter * Number(price.split(" ")[0])}$` : ""}</p>

                <div className={styles.counter}>
                    {/* <img src={down} className={counter === 0 && styles.deactive} alt="arrowDown" onClick={this.downHandler} /> */}
                    {<img src={down} className={counter === 0 ? styles.deactive : ""} alt="arrowDown" onClick={this.downHandler} />}

                    <span>{counter}</span>
                    <img src={up} onClick={this.upHandler} alt="arrowUp" />
                </div>
            </div>
        );
    }

    /*  
        ternary operator ==> {counter === 0 ? styles.deactive : ""}
        ----------------------------------------------------------------------------------
        and percent ==> {counter === 0 && styles.deactive}
        shabih b ternary has amma ba && piadeSazi mishe va bara vaghtie k
        faghat baramoon dorost boodane shart mohem bashe o ag shart false shod,
        niaz nabashe kare khasi anjam bedim. inja ham ye shart migire o ag True bood,
        ghesmate baad az && ro ejra mikone o ag ham False bood k hich kari nmikone.
    */

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }

    upHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
}

export default Card;