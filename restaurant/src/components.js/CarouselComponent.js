import React from 'react';
import Carousel from 'react-bootstrap/Carousel' 

function ControlledCarousel(){
        
        
        return(
            <Carousel className="car">
                <Carousel.Item >
                    <img src="images/chocolates.PNG" alt="chocolates"
                    style={{'height':'400px'}} className="d-block w-40 imgCont"/>
                    <Carousel.Caption className="cap">
                        <h3>Chocolates</h3>
                        <p>Chocolate’s antioxidant potential may have a range of health benefits.
                        The higher the cocoa content, as in dark chocolate, the more benefits there are.
                        Dark chocolate may also contain less fat and sugar, but it is important to check the label.
                        Eating chocolate may have the following benefits:</p>
                        <ol>
                            <li>Lowering cholesterol levels</li>
                            <li>Preventing cognitive decline</li>
                            <li>Reducing the risk of cardiovascular problems</li>
                        </ol>
                        <p>We have a wide variety of chocolates of different range and of various brands.
                            <em>So vist us to  get healthy by eating <strong>Chocolates</strong>.</em>
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/milkProducts.PNG" alt="milkProducts"
                    style={{'height':'400px'}}  className="d-block imgCont"/>
                    <Carousel.Caption className="cap">
                        <h3>Milk Products</h3>
                        <p>Milk products are a type of food produced from or containing the milk of mammals.
                        They are primarily produced from mammals such as cattle, water buffaloes, goats,
                        sheep, camels and humans. Dairy products include food items such as yogurt, cheese and butter.</p>
                        <p>We provide the best milk products in the area which includes</p>
                        <ul>
                            <li>Milk</li>
                            <li>Butter</li>
                            <li>Curd</li>
                            <li>Paneer</li>
                            <li>Cheese</li>
                        </ul>
                    </Carousel.Caption >
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/icecreams.PNG" alt="icecreams"
                    style={{'height':'400px'}}  className="d-block w-40 imgCont"/>
                    <Carousel.Caption className="cap">
                        <h3>Icecreams</h3>
                        <p>Ice cream is a sweetened frozen food typically eaten as a snack or dessert.
                        It may be made from dairy milk or cream and is flavoured with a sweetener,
                        either sugar or an alternative, and any spice, such as cocoa or vanilla.
                        Colourings are usually added, in addition to stabilizers.</p>
                        <p>We now that we aren't an Icecream Parlour but we have all brands of it</p>
                        <ul style={{listStyleType:"circle"}}>
                            <li>Vadilal</li>
                            <li>Kwality Walts</li>
                            <li>Ice-troopers</li>
                            <li>Omni</li>
                        </ul>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="images/biscuits.PNG" alt="biscuits"
                    style={{height:'400px'}}  className="d-block w-40 imgCont"/>
                    <Carousel.Caption className="cap">
                        <h3>Biscuits</h3>
                        <p>Find the biscuits you love</p>
                        <ul style={{listStyleType:"square"}}>
                        <li>Parle G</li>
                        <li>Krackjack</li>
                        <li>20-20 Cookies</li>
                        <li>Monaco-Salted Craker</li>
                        <li>Golden Arcs</li>
                        <li>Hide & Seek Choco Chips</li>
                        <li>Top</li>
                        <li>Hide & Seek Milano</li>
                        <li>Happy Happy</li>
                        <li>Hide & Seek Bourbon</li>
                        <li>Hide & Seek Fab</li>
                        </ul>
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