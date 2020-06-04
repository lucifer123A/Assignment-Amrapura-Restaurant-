import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen: false,
        }
        this.handleNav=this.handleNav.bind(this);
        this.handleModal=this.handleModal.bind(this);
    }
    handleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }

    handleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.handleNav}/>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar> 
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span>Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span>Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span>About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span>Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            
                            <div className="col-sm-4 mr-auto">
                                <img src="images/logo.PNG"
                                 alt="Amrapur Restaurant" className="logoImage"/>
                            </div>
                            <div className="col-12 col-sm-8">
                                <h1>Amrapur Restaurant</h1>
                                <p>We serve Love with the food.
                                Our food contains the taste from all across the nation.
                                Taste our food and you will feel as if you have visited
                                India sitting at the table of our restaurant. 
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;