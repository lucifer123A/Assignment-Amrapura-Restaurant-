import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch , Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <Header/>
            <Switch>
                <Route path="/home" component={Home}/>
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
            </>
        );
    }
}

export default withRouter(Main);
