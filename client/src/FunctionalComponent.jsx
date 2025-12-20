import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const FunctionalComponent = ({ name, showComponent }) => {
  console.log("🚀 ~ FunctionalComponent ~ render:");

  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const onClickHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(data);
    })();
    // works like componentDidMount
    console.log('useEffect without dependencies');

    return () => {
      // works like componentWillUnmount
      console.log('Cleanup in Functional Component');
    }
  }, []);

  useEffect(() => {
    console.log('This use Effect runs on every render');
  })

  useEffect(() => {
    // works like componentDidUpdate for count state
    console.log('This use Effect runs with changes to count state', count);

    return () => {
      console.log('Cleanup for count change in Functional Component', count);
    }
  }, [count]);

  return (
    <>
      {/* <h1>FunctionalComponent</h1>
      <h2>state count - {count}</h2>
      <button onClick={onClickHandler}>update State</button> */}
      <Container fluid>
        <Row>
          <Col>
            col
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FunctionalComponent
