import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, Button, Label, Input,
     Col, Row,Form, FormGroup,Card, CardBody, CardHeader} from 'reactstrap';



class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            isModalOpen:false,
            isClicked:false,
        }
        this.toggleModal= this.toggleModal.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleS= this.handleS.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(){
        this.setState({
            isClicked: !this.state.isClicked
        });
    }

    handleS(event){
        event.preventDefault();
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
                    <Form onSubmit={this.handleS}>
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
                            <Button type="submit" value="submit" className="bg-primary"
                            onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>   
                <Check check={this.state.isClicked}/>
                </>       
        );

        function Check({check}){
            if (check){
                return(
                    <>
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
                 </>
                )
            }
            else{
                return(
                    <>
                <Card>
                    <CardHeader className="cardClass">Loyalty Timeline</CardHeader>
                    <CardBody className="cardbodyClass">
                        <h4>Today as your First Visit</h4>
                        <p>Amrapura offers you the welcome discount of
                            <strong> 5%</strong>
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
                </>
                )
                
            }
        }
                
            
            
    }
}

export default Home;