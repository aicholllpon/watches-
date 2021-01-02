import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Badge, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

const Header = (props) => {
    const { productsCountInCart, productsCountInFavorite } = useContext(AdminContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="top"></div>
            <img src="https://www.watches-of-switzerland.co.uk/medias/?context=bWFzdGVyfGNvbnRlbnRfaW1hZ2VzfDExMzYwfGltYWdlL3BuZ3xjb250ZW50X2ltYWdlcy9oMzMvaGQ2LzkwMDQ4MDM4NTAyNzAucG5nfGM2Yzc2N2M1YzFkM2QyOWM3OWM2YjM2Yjc2MTAzNjE4NDljOGI2YTBjZDY5ZjFiM2YwYjAxMDUxZWExZTc0ZGM" className="logo" />
            <Navbar className="navbar container" color="white" light expand="md">
                <NavbarBrand className="first_nav" href="/">Brands a-z</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Sale</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Gender
                                </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Men
                                    </DropdownItem>
                                <DropdownItem>
                                    Women
                                    </DropdownItem>
                                <DropdownItem divider />
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <div className="right_navs d-flex col-lg-4" style={{ justifyContent: 'space-around', cursor: 'pointer' }}>
                        <Link to='/signin'>
                            <NavbarText className="nav_1 mt-2">Sign In</NavbarText>
                        </Link>
                        <Link to='/signup'>
                            <NavbarText className="nav_2 mt-2">Sign Up</NavbarText>
                        </Link>
                        <Link to="/cart" style={{ color: 'inherit' }}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={productsCountInCart} color="secondary">
                                    <AddShoppingCartIcon style={{ color: 'grey' }} />
                                </Badge>
                            </IconButton>
                        </Link>

                        <Link to="/favorite" style={{ color: 'inherit' }}>
                            <IconButton aria-label="show 4 new mails" color="inherit">
                                <Badge badgeContent={productsCountInFavorite} color="secondary">
                                    <FavoriteBorderIcon style={{ color: 'grey' }} />
                                </Badge>
                            </IconButton>
                        </Link>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header;