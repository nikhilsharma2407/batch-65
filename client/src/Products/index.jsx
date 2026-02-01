import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
  const URL = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    (async () => {
      const { data } = await axios.get(URL);
      setProducts(data);
      console.log("🚀 ~ Products ~ data: useEffect", data);
    })();

    // short polling -> client making the get request repeatedly
    // socket - real time communication - chat application, Stock Market app
    // SSE-> Server sent events
  }, []);

  console.log("🚀 ~ Products ~ products:", products)

  return (
    <Container fluid>
      <Row>
        {products.map(product => <ProductCard product={product} />)}
      </Row>
    </Container>
  )
}

export default Products