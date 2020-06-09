import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';



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
            <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            
                            <div className="col-sm-4 mr-auto">
                                <img src="images/logo.PNG"
                                 alt="Amrapur Restaurant" className="logoImage"/>
                            </div>
                            <div className="col-12 col-sm-8">
                                <h1>Amrapura Confectionary</h1>
                                <p>A perfect place to find your daily needs from the milk products
                                    to the bakery items we have it all. 
                                    You are an adult looking to buy something for home or
                                    you are just a teenager who is looking for new chocolates and soft-drinks
                                    or you are a kid and looking for some exciting candies.
                                    You must visit our store. 
                                </p>
                                <p><em>Building trust since 2000</em></p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>              
                </>       
        );

        
                
            
            
    }
}

export default Home;