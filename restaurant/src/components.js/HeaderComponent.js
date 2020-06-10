import React, {Component} from 'react';
import { Control , Form} from 'react-redux-form';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Row, Col,
    Button, Modal, ModalHeader, ModalBody,  FormGroup, Label, Input, ButtonGroup, Container} from 'reactstrap';
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

    handleSubmit(values){
        console.log("Current state is: "+JSON.stringify(values));
        alert("current state is: "+JSON.stringify(values));
        this.props.signingUp(values.email,values.username,values.password);
        this.props.resetSignUp();
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
                                <NavLink className="nav-link" to="/stock">
                                    <span className="fa fa-list fa-lg"></span>Stock
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/account">
                                    <span className="fa fa-info fa-lg"></span>Account
                                </NavLink>
                            </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                            <Button onClick={this.handleModal}>Sign up</Button>
                                                                                                                      
                            </NavItem>
                            </Nav>                                                  
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.handleModal}>
                    <ModalHeader className="modalHeader" toggle={this.handleModal}>Sign up</ModalHeader>
                    <ModalBody className="modalBody">
                        
                            <Form  model="customers" onSubmit={(values)=> this.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={12}>Email</Label>
                                    <Col md={12}>
                                        <Control.text model=".email" id="email" name="email"/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="username" md={12}>Username</Label>
                                    <Col md={12}>
                                        <Control.text model=".username" id="username" name="username"/>
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="password" md={12}>Password</Label>
                                    <Col md={12}>
                                        <Control.password model=".password" id="password" name="password"/>
                                    </Col>
                                </Row>
                            <Button type="submit" className="bg-primary">Sign up</Button>
                            </Form>
                        
                    </ModalBody>
                </Modal>

                

                
            </>
        );
    }
}

export default Header;