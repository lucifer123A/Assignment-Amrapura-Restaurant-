import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Car from './CarouselComponent';
import Account from './AccountComponent';
import {Switch , Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signingUp} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';


const mapDisatchToProps= (dispatch)=> ({
    signingUp: (email,username,password)=> dispatch(signingUp(email,username,password)),
    resetSignUp: ()=> {dispatch(actions.reset('customers'))}
})

class Main extends React.Component{
    
   
    
    render(){
        return(
            <>
            <Header signingUp={this.props.signingUp}
            resetSignUp={this.props.resetSignUp}/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/stock" component={Car}/>
                <Route path="/account" component={Account}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
            </>
        );
    }
}

export default withRouter(connect(undefined, mapDisatchToProps)(Main));
