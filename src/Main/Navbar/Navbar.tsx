import {
    BsSearch,
    BsHouseDoor,
    BsMessenger,
    BsPlusSquare,
    BsCompass,
    BsHeart,
    BsFillEmojiSmileUpsideDownFill,
} from 'react-icons/bs';
import styles from './Navbar.module.scss';

import {
    Col,
    Container,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
    Row,
} from 'react-bootstrap';

export const NavbarLayout = () => (
    <Navbar className={styles.navbar}>
        <Col md={{ offset: 2, span: 9 }}>
            <Container>
                <Row>
                    <Col md={{ span: 2 }}>
                        <Navbar.Brand href="#home" className={styles.brand}>
                            Clonestagram
                        </Navbar.Brand>
                    </Col>
                    <Col md={{ span: 6 }} className={styles.searchBar}>
                        <InputGroup>
                            <InputGroup.Text className={styles.searchInput}>
                                <BsSearch />
                            </InputGroup.Text>
                            <FormControl
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <Nav className={styles.links}>
                            <Nav.Link href="#home">
                                <BsHouseDoor />
                            </Nav.Link>
                            <Nav.Link href="#Inbox">
                                <BsMessenger />
                            </Nav.Link>
                            <Nav.Link href="#NewPost">
                                <BsPlusSquare />
                            </Nav.Link>
                            <Nav.Link href="#Discover">
                                <BsCompass />
                            </Nav.Link>
                            <Nav.Link href="#Notifications">
                                <BsHeart />
                            </Nav.Link>
                            <Nav.Link href="#Notifications">
                                <BsFillEmojiSmileUpsideDownFill />
                            </Nav.Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Col>
    </Navbar>
);
