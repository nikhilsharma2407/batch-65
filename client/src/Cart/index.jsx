import React, { useEffect, useRef } from 'react'
import useApi from '../useApi'
import { Card, CardBody, Col, Container, Row, Image, FormCheck, Button, Badge, ProgressBar } from 'react-bootstrap';
import './styles.scss'
import { Dash, Plus, Trash } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import { ENDPOINTS, REQUEST_TYPES } from '../apiUtils';

const Cart = () => {

    const navigate = useNavigate();
    const { makeRequest: getCartData, responseData } = useApi(ENDPOINTS.CART.GET_CART);
    const { makeRequest: clearCartApi, responseData: clearCartResponse } =
        useApi(ENDPOINTS.CART.CLEAR_CART, REQUEST_TYPES.DELETE);
    const { makeRequest: checkout, responseData: checkoutSession } = useApi(ENDPOINTS.CART.CHECKOUT, REQUEST_TYPES.POST);
    console.log("🚀 ~ Cart ~ clearCartResponse:", clearCartResponse)

    const onCheckout = () => {
        checkout(null, { updateUser: false });
    }

    useEffect(() => {
        if (checkoutSession?.url) {
            // load an external URL;
            window.location.href = checkoutSession?.url
        }
    }, [checkoutSession]);



    useEffect(() => {
        const intervalID = setInterval(() => getCartData(null, { updateUser: false }), 5000);

        getCartData(null, { updateUser: false });
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    const { totalPrice, totalQuantity } = clearCartResponse || responseData || {}

    const clearCart = () => {
        clearCartApi(null, { updateUser: false });
    }


    return (
        <Container fluid>
            <Row>
                {/* left section */}
                <Col md={9}>
                    <Card className='cart-item'>
                        <CardBody>
                            <h2>Shopping Cart</h2>
                            <hr />

                            {/* repeat this for multiple products */}
                            {(clearCartResponse || responseData)?.items?.map(({
                                id,
                                title,
                                price,
                                description,
                                category,
                                image,
                                quantity,
                                discount = 10
                            }) => {
                                const discountedPrice = parseInt(price * (1 - discount / 100))

                                return <>
                                    <Row>
                                        <Col md={3}>
                                            <Image src={image} fluid />
                                        </Col>

                                        <Col md={6}>
                                            <h5>{title}</h5>
                                            <Badge pill >{category}</Badge>
                                            <section className='info mt-1'>
                                                <section className='text-success mb-1'>In Stock</section>
                                                <section className='text-muted mb-2'>Eligible for FREE shipping</section>
                                            </section>

                                            <FormCheck label='This will be a gift' />

                                            <span className='cart-qty rounded-border mt-3 me-3'>
                                                <span>{quantity > 1 ? <Dash size={20} className='me-1' /> : <Trash size={20} />} </span>
                                                <span>{quantity}</span>
                                                <span><Plus size={25} /></span>
                                            </span>

                                            <span className='btn-border'>
                                                <Link size='sm'>Delete</Link>
                                            </span>
                                            <span className='btn-border'>
                                                <Link size='sm'>Save for Later</Link>
                                            </span>
                                        </Col>
                                        <Col md={3} className='text-end'>
                                            <Badge pill className='bg-danger mb-2'>{discount}% off</Badge>
                                            <h5>${(discountedPrice * 100).toLocaleString('en-IN')}</h5>
                                            <span className='me-1'>M.R.P.:</span>
                                            <span style={{ textDecoration: "line-through" }}>${price.toLocaleString('en-IN')}</span>
                                        </Col>
                                    </Row>
                                    <hr />
                                </>
                            })}


                        </CardBody>
                    </Card>
                </Col>

                {/* right section */}
                <Col md={3}>
                    <Card>
                        <CardBody>
                            <section>
                                <section className='d-flex align-items-center'>
                                    <ProgressBar className='w-100 me-3' variant='success' now={totalPrice} max={499} />
                                    <span>499</span>
                                </section>
                                {totalPrice > 500 && <span className='text-success'>Your order is eligible for FREE Delivery.</span>}

                                <h5>Subtotal ({totalQuantity}):  ${totalPrice?.toLocaleString('en-IN')}</h5>
                                <FormCheck className='mt-3' label='This order contains a gift' />
                                <Button onClick={onCheckout} variant='warning my-2' className='rounded-border w-100'>Proceed to Buy</Button>
                                <Button onClick={clearCart} variant='danger' className='rounded-border w-100'>Clear Cart</Button>
                            </section>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart