// store u posebnom fajlu ne mora samo je prakticnije
import {createStore} from 'redux';
import {Reducer, initialState} from './reducer'

export const ConfigureStore= () =>{
    const store = createStore(
        Reducer, 
        initialState
    );

    return store;
}