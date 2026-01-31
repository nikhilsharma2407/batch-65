import React from 'react'
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col } from 'react-bootstrap';
import { Rating } from "react-simple-star-rating"
import './styles.scss';
import { BagPlusFill } from 'react-bootstrap-icons';
import CartCounter from './CartCounter';

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

    {/* <img className='image' loading='lazy' src={image} />
            <section>Title - {title}</section>
            price - {price} */}
    const { title, price, image, description, rating } = product;

    const isPresentInCart = true;

    return (
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 5 }} lg={{ span: 4, offset: 0 }} xl={{ span: 3 }} >
            <Card className='product-card mb-3'>
                <CardHeader className='title'>{title}</CardHeader>
                <CardImg src={image} variant='top' className='p-2 image' />
                <CardBody>
                    <section className='content'>
                        <section className='text price'>${price}</section>
                        <section className='text description'>{description}</section>
                    </section>
                    <section className='d-flex align-items-end'>
                        <Rating readonly initialValue={rating.rate} allowFraction size={25} />
                        <Badge pill className='ms-2'>{rating.count}</Badge>
                    </section>
                </CardBody>
                <CardFooter>
                    {isPresentInCart ? <CartCounter quantity={4} /> : <Button variant='outline-primary' className='d-flex align-items-center'>
                        <BagPlusFill size={25} className='me-2' />
                        Add to Cart
                    </Button>}

                </CardFooter>
            </Card>
        </Col>
    )
}

export default Product