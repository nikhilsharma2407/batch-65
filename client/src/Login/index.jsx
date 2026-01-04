import React from 'react'
import './style.scss'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { useLocation } from 'react-router'

const Login = () => {
    const { state } = useLocation()
    console.log("🚀 ~ Login ~ state:", state);

    return (
        <Container fluid>
            <Row>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
                    <Card className='login-card mt-5'>
                        <CardHeader>Login</CardHeader>
                        <CardBody>
                            <FormGroup controlId='username' className='mb-3'>
                                <FormLabel>Username</FormLabel>
                                <FormControl placeholder='Enter Username' />
                            </FormGroup>

                            <FormGroup controlId='password' className='mb-3'>
                                <FormLabel>Password</FormLabel>
                                <FormControl placeholder='Enter Password' />
                            </FormGroup>

                        </CardBody>
                        <CardFooter>

                            <Button variant='outline-primary'>Login</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Login