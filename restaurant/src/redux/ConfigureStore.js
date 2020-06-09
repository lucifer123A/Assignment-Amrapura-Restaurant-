import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import {Users} from './users';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {InitialForm} from './forms';

export const ConfigureStore = ()=> {
    const store= createStore(
        combineReducers({
            users: Users,
            ...createForms({
                customers: InitialForm,
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
};