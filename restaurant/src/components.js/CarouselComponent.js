import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 

function ControlledCarousel(){
        
        
        return(
            <Carousel className="car">
                <Carousel.Item >
                    <img src="images/chocolates.PNG" alt="chocolates"
                    style={{'height':'400px'}} className="d-block w-40 imgCont"/>
                    <Carousel.Caption className="textCont">
                        <h3>Chocolates</h3>
                        <p>We have a wide variety of chocolates of different range and of various brands</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/milkProducts.PNG" alt="milkProducts"
                    style={{'height':'400px'}}  className="d-block w-40"/>
                    <Carousel.Caption ml={6}>
                        <h3>Milk Products</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/icecreams.PNG" alt="icecreams"
                    style={{'height':'400px'}}  className="d-block w-40"/>
                    <Carousel.Caption>
                        <h3>Icecreams</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/biscuits.PNG" alt="biscuits"
                    style={{'height':'400px'}}  className="d-block w-40"/>
                    <Carousel.Caption>
                        <h3>Biscuits</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        );
        }

function Car(props){
        return(
            <ControlledCarousel/>
        );
}

export default Car;