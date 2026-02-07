import React, { useEffect, useState } from 'react'
import './style.scss'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router'
import { axiosInstance, ENDPOINTS, REQUEST_TYPES } from '../apiUtils'
import useApi from '../useApi'
import useIsLoggedIn from '../useIsLoggedIn'

const Login = () => {
    const isLoggedIn = useIsLoggedIn();
    // update localstorage onLoginRedirect->
    // BE-> homepage
    const { state } = useLocation()
    const navigate = useNavigate();
    const { makeRequest: loginRequest } = useApi(ENDPOINTS.USER.LOGIN, REQUEST_TYPES.POST);
    const { makeRequest: resetPasswordRequest } = useApi(ENDPOINTS.USER.RESET_PASSWORD, REQUEST_TYPES.PATCH);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

    const [showResetForm, setShowResetForm] = useState(false);


    const onLogin = async () => {
        const payload = { username, password };
        // const response = await axiosInstance.post(ENDPOINTS.USER.LOGIN, payload);
        await loginRequest(payload);
        setPassword('')
        setUsername('')
    }

    const onResetPassword = async () => {
        const payload = { username, otp, newPassword: password };
        await resetPasswordRequest(payload, { updateUser: false });
        setShowResetForm(false);
        setPassword('')
        setUsername('')
        setOtp('')
    }

    useEffect(() => {
        if (isLoggedIn && state) {
            console.log("🚀 ~ Login ~ state:", state)
            navigate(state, { replace: true })

        }
    }, [isLoggedIn, state])

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
                                <FormControl value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter Username' />
                            </FormGroup>

                            <FormGroup controlId='password' className='mb-3'>
                                <FormLabel>Password</FormLabel>
                                <FormControl value={password} type='password' onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
                            </FormGroup>
                            {showResetForm &&
                                <FormGroup controlId='otp' className='mb-3'>
                                    <FormLabel>OTP</FormLabel>
                                    <FormControl value={otp} type='number' onChange={e => setOtp(e.target.value)} placeholder='Enter OTP' />
                                </FormGroup>
                            }

                        </CardBody>
                        <CardFooter className='d-flex justify-content-between'>
                            {showResetForm ? <Button onClick={onResetPassword}>Reset Password</Button> : <>
                                <Button disabled={!isValid} variant='outline-primary' onClick={onLogin}>Login</Button>
                                <Button variant='link' onClick={() => setShowResetForm(true)}>Forgot Password</Button>
                            </>}



                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Login