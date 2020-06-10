import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const addUser= (user)=> ({
    type: ActionTypes.ADD_USER,
    payload: user
});

export const signingUp = (email, username, password)=> (dispatch)=> {
    const newUser={
        email: email,
        username: username,       
        password: password
    }
    newUser.date = new Date().toISOString;

    return fetch (baseUrl+ 'customers',{
        method: "POST",
        body: JSON.stringify(newUser),
        headers:{
            "Content-Type":"application/json"
        },
        credentials: "same-origin"
    })
    .then(response=> {
        if(response.ok){
            return response;
        }
        else{
            var error= new Error(response.status+': '+response.statusText);
            error.response= response;
            throw error;
        }
    },error =>{
        throw error
    })
    .then(response=> response.json())
    .then(response=> dispatch(addUser(response)))
    .catch(error =>  { console.log('post feedbacks', error.message);
     alert('Your feedback could not be posted\nError: '+error.message); });
}
