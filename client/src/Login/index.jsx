import React, { useState } from 'react'
import './style.scss'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { useLocation } from 'react-router'
import { axiosInstance, ENDPOINTS } from '../apiUtils'

const Login = () => {
    const { state } = useLocation()
    console.log("🚀 ~ Login ~ state:", state);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const onLogin = async () => {
        const payload = { username, password };
        const { data } = await axiosInstance.post(ENDPOINTS.USER.LOGIN, payload);
        console.log("🚀 ~ onLogin ~ data:", data)
    }

    const isValid = username && password;

    return (
        <Container fluid>
            <Row>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
                    <Card className='login-card mt-5'>
                        <CardHeader>Login</CardHeader>
                        <CardBody>
                            <FormGroup controlId='username' className='mb-3'>
                                <FormLabel>Username</FormLabel>
                                <FormControl onChange={e => setUsername(e.target.value)} placeholder='Enter Username' />
                            </FormGroup>

                            <FormGroup controlId='password' className='mb-3'>
                                <FormLabel>Password</FormLabel>
                                <FormControl onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
                            </FormGroup>

                        </CardBody>
                        <CardFooter>

                            <Button disabled={!isValid} variant='outline-primary' onClick={onLogin}>Login</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Login