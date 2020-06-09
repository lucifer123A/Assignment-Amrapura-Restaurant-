import React, {Component} from 'react';
import { Navbar, Nav, NavbarToggler, Collapse, NavItem, Row, Col,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ButtonGroup, Container} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Control } from 'react-redux-form';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false,
            isModalOpen: false,
            isModslOpen2: false,
        }
        this.handleNav=this.handleNav.bind(this);
        this.handleModal=this.handleModal.bind(this);
        this.handleModal2=this.handleModal2.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("Current state is: "+JSON.stringify(values));
        alert("current state is: "+JSON.stringify(values));
        this.props.signingUp(values.email,values.username,values.password);
        this.props.resetSignUp();
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

    handleModal2(){
        this.setState({
            isModalOpen2: !this.state.isModalOpen2,
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
                                <NavLink className="nav-link" to="/stock">
                                    <span className="fa fa-list fa-lg"></span>Stock
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
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                    <Button outline onClick={this.handleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>Login
                                    </Button>                                                                                   
                            </NavItem>
                            </Nav>                                                  
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.handleModal}>                    
                    <ModalHeader className="modalHeader" toggle={this.handleModal}>Login</ModalHeader>
                    <ModalBody className="modalBody">
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(ip)=>this.username=ip}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(ip)=>this.password=ip}/>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Login</Button>
                            <Button onClick={this.handleModal2} className="bg-grey">Sign up</Button> 
                        </Form>
                    </ModalBody>                                  
                </Modal>

                <Modal isOpen={this.state.isModalOpen2} toggle={this.handleModal2}>
                    <ModalHeader className="modalHeader" toggle={this.handleModal2}>Sign up</ModalHeader>
                    <ModalBody className="modalBody">
                        <Container>
                            <Form  model="customers" onSubmit={(values)=> this.handleSubmit(values)}>
                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" name="email"
                                    innerRef={(ip)=>this.email=ip}/>
                                </FormGroup>
                                <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                innerRef={(ip)=>this.username=ip}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                innerRef={(ip)=>this.password=ip}/>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Sign up</Button>
                            </Form>
                        </Container>
                    </ModalBody>
                </Modal>

                
            </>
        );
    }
}

export default Header;