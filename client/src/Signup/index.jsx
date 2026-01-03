import React, { useReducer } from 'react'
import './style.scss'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { ACTIONS, initialState, signupReducer } from './signupReducer'

const Signup = () => {
    // const [username, setUsername] = useState({ value: '', isValid: false });
    // const [email, setEmail] = useState({ value: '', isValid: false });
    // const [password, setPassword] = useState({ value: '', isValid: false, hasLowercase: false, hasUppercase: false, hasNumber: false, hasSpecialChar: false, minLength: false });

    const [state, dispatch] = useReducer(signupReducer, initialState)


    const isPasswordValid = [...Object.values(state.password.validations)].every(Boolean);

    return (
        <Container fluid>
            <Row>
                <Col sm={{ offset: 1, span: 10 }} md={{ offset: 3, span: 6 }} lg={{ offset: 4, span: 4 }}>
                    <Card className='signup-card mt-5'>
                        <CardHeader>Signup</CardHeader>
                        <CardBody>
                            <FormGroup controlId='name' className='mb-3'>
                                <FormLabel>Name</FormLabel>
                                <FormControl onChange={(e) => dispatch({ type: ACTIONS.NAME_CHANGE, payload: e.target.value })} placeholder='Enter Name' />
                            </FormGroup>

                            <FormGroup controlId='username' className='mb-3'>
                                <FormLabel>Username</FormLabel>
                                <FormControl onChange={(e) => dispatch({ type: ACTIONS.USERNAME_CHANGE, payload: e.target.value })} placeholder='Enter Username' />
                            </FormGroup>

                            <FormGroup controlId='email' className='mb-3'>
                                <FormLabel>Email</FormLabel>
                                <FormControl onChange={(e) => dispatch({ type: ACTIONS.EMAIL_CHANGE, payload: e.target.value })} placeholder='Enter Email' />
                            </FormGroup>

                            <FormGroup controlId='password' className='mb-3'>
                                <FormLabel>Password</FormLabel>
                                <FormControl onChange={e => dispatch({ type: ACTIONS.PASSWORD_CHANGE, payload: e.target.value })} placeholder='Enter Password' />
                            </FormGroup>
                        </CardBody>
                        <CardFooter>

                            <Button variant='outline-primary'>Signup</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Signup