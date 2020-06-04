import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Button, Label, Input,
     Col, Row,Form, FormGroup,Card, CardBody, CardHeader} from 'reactstrap';



class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            isModalOpen:false,
        }
        this.toggleModal= this.toggleModal.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(){
        this.toggleModal();
        alert("Date: "+this.date.value+" Items Ordered: "+this.dish.value);
    }

    render(){
        return(
            <>
            <div className="container">
                <div className="row" >
                    <h2>Amrapur restaurant Welcomes You</h2>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p>Be ready as you are going to taste the most delicious meal of your life
                        We have booked the table for you so please enjoy your meal now.</p>
                    </div>
                </div>
                <div className="row space">
                    <Button className="forButton" onClick={this.toggleModal}>Add Visit</Button>
                </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Add Visit</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="date">Date</Label>
                                <Input type="date" id="date" name="date"
                                innerRef={(input)=>this.date=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="dish">Items ordered</Label>
                                <Input type="text" for="dish" name="dish"
                                innerRef={(input)=>this.dish=input}/>
                            </FormGroup>
                            <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                        </Form>
                    </ModalBody>
                    <Card>
                        <CardHeader className="cardClass">Loyalty Timeline</CardHeader>
                        <CardBody className="cardbodyClass">
                            <h4>Today as your First Visit</h4>
                            <p>Amrapura offers you the welcome discount of
                                <strong>5%</strong>
                            </p>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader className="cardClass">Loyalty Timeline</CardHeader>
                        <CardBody className="cardbodyClass">
                            <h4>On your Second Visit</h4>
                            <p> You can get one of the three items completely free</p>
                            <ul>
                                <li>Panner Tikka</li>
                                <li>Pizza</li>
                                <li>Burger</li>
                            </ul>
                        </CardBody>
                    </Card>
                </Modal>          
            </>
            
        );
    }
}

export default Home;