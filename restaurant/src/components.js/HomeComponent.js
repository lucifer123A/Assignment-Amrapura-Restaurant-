import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';



class Home extends Component{
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