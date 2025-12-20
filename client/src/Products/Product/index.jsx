import React from 'react'
import { Col } from 'react-bootstrap';
import './styles.css';

const Product = ({ product }) => {

    //     {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    //     }
    // }

    const { title, price, image } = product;
    return (
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 5 }} lg={{ span: 4, offset: 0 }} xl={{ span: 3 }} >
            <img className='image' loading='lazy' src={image} />
            <section>Title - {title}</section>
            price - {price}
        </Col>
    )
}

export default Product