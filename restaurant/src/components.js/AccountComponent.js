import React, {Component} from 'react';
import { Control , Form} from 'react-redux-form';
import {Row, Col, Card, CardHeader, CardBody, Button, Modal,
     ModalHeader, ModalBody,Label} from 'reactstrap';

class Account extends Component{

    constructor(props){
        super(props);
        this.state={
            username: "No username",
            email: '',
            password: "******",
            isModalOpen: false,
        }
        this.handleModal=this.handleModal.bind(this);
    }

    handleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }

    render(){
        return(

            <>

            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <Card className="card">
                            <CardHeader className="carHeader">Quote of the Day!</CardHeader>
                            <CardBody className="carBody">
                                <blockquote>You know your life has changed when going to the grocery 
                                    store by yourself is a vacation.
                                    <footer>
                                        <cite>motherhood</cite>
                                    </footer>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-4">
                        <img src="images/userlogin.PNG" alt="user" className="card"/>
                    </div>
                </div>  
                <div className="row">
                    <Button onClick={this.handleModal} className="button">Login</Button>
                </div>        
            </div>

        <Modal isOpen={this.state.isModalOpen} toggle={this.handleModal}>
        <ModalHeader className="modalHeader" toggle={this.handleModal}>Login</ModalHeader>
        <ModalBody className="modalBody">
            
                <Form  model="customers">
                    <Row className="form-group">
                        <Label htmlFor="username" md={12}>Username</Label>
                        <Col md={12}>
                            <Control.text model=".username" id="username" name="username"/>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" md={12}>Password</Label>
                        <Col md={12}>
                            <Control.text model=".password" id="password" name="password"/>
                        </Col>
                    </Row>
                <Button type="submit" value="submit" className="bg-primary">Login</Button>
                </Form>
            
        </ModalBody>
        </Modal>

</>
            
        );
    }
}

export default Account;