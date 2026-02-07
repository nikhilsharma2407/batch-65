import React, { useCallback, useContext } from 'react'
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, CardImg, Col } from 'react-bootstrap';
import { Rating } from "react-simple-star-rating"
import './styles.scss';
import { BagPlusFill } from 'react-bootstrap-icons';
import CartCounter from './CartCounter';
import useApi from '../../useApi';
import { ENDPOINTS, REQUEST_TYPES } from '../../apiUtils';
import { useLocation, useNavigate } from 'react-router';
import { UserContext } from '../../UserContextProvider';

const ProductCard = ({ product }) => {
    const { userData, isLoading } = useContext(UserContext);

    const navigate = useNavigate();
    const { pathname } = useLocation()
    const { makeRequest: makeAddToCartReq } = useApi(ENDPOINTS.CART.ADD_TO_CART, REQUEST_TYPES.POST)
    const { makeRequest: makeRemoveFromCartReq } = useApi(ENDPOINTS.CART.REMOVE, REQUEST_TYPES.DELETE)
    const { makeRequest: makeIncrementRequest } = useApi(ENDPOINTS.CART.INCREMENT, REQUEST_TYPES.PATCH)
    const { makeRequest: makeDecrementRequest } = useApi(ENDPOINTS.CART.DECREMENT, REQUEST_TYPES.PATCH)

    const { title, price, image, description, rating, id } = product;

    const cart = userData?.cart?.items;
    const productInfo = cart?.find(p => p.id === id);

    const onIncrement = () => {
        if (isLoading) return
        makeIncrementRequest(product, {updateCart: true})
    }

    const onDeceremt = () => {
        if (isLoading) return
        makeDecrementRequest(product, {updateCart: true})
    }

    const onRemoveFromCart = () => {
        if (isLoading) return
        makeRemoveFromCartReq({ params: { id, title } }, {updateCart: true})
    }

    const onAddToCart = () => {
        // user is not logged in
        if (!userData) {
            return navigate(`/login`, {
                state: pathname,
                replace: true
            });
        }
        makeAddToCartReq(product, {updateCart: true});
    }



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
                    {productInfo ? <CartCounter isLoading={isLoading} onDecrement={onDeceremt} onIncrement={onIncrement} onRemove={onRemoveFromCart} quantity={productInfo.quantity} /> :
                        <Button onClick={onAddToCart} disabled={isLoading} variant='outline-primary' className='d-flex align-items-center'>
                            <BagPlusFill size={25} className='me-2' />
                            Add to Cart
                        </Button>}

                </CardFooter>
            </Card>
        </Col>
    )
}

export default ProductCard