import { use } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import useIsLoggedIn from './useIsLoggedIn';
import useApi from './useApi';
import { ENDPOINTS } from './apiUtils';
import { Cart } from 'react-bootstrap-icons';
import { useUserContext } from './UserContextProvider';
import { Badge } from 'react-bootstrap';

const MyNavBar = () => {
    const isLoggedIn = useIsLoggedIn();
    const { userData } = useUserContext();

    const cartTotalQuantity = userData?.cart?.totalQuantity
    const { makeRequest } = useApi(ENDPOINTS.USER.LOGOUT);

    const onLogout = () => {
        makeRequest(null, { logout: true })
    }
    return (
        <Navbar expand="md" className="bg-dark text-white mb-2" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Amazecart</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                    >
                        <Nav.Link as={Link} to="/routing/123">Routing</Nav.Link>
                        <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
                        <Nav.Link as={Link} to="/parent">parent</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Nav className='ms-auto'>
                        {isLoggedIn ? <>

                            <Nav.Link as={Link} to="/user/cart">
                                <Cart size={25} />
                                {cartTotalQuantity && <Badge style={{ position: 'relative', top: '-10px', left: '-10px' }} pill>{cartTotalQuantity}</Badge>}

                            </Nav.Link>
                            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
                        </> : <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        </>}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavBar;