import axios from 'axios';
import React, { Component } from 'react';
import Card from './Card';
import styles from "../styles/Products.module.css";

class Products extends Component {

    state = {
        products: []
    }

    componentDidMount = () => {
        axios.get("https://fakestoreapi.com/products")
            .then(response => this.setState({
                products: response.data
            }))
    }
    render() {
        const { products } = this.state;
        return (
            <div className={styles.container}>

                {
                    products.length
                        ?
                        products.map(product => <Card key={product.id} image={product.image} name={product.title} price={`${product.price} $`} />)
                        :
                        <h1>L O A D I N G...</h1>
                }

            </div>
        );
    }
}

export default Products;