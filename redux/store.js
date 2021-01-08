import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import {addContact} from './actions'
import reducer from './reducer'

/* Explaination how it work in applyMiddleware when action is function being dispatched
const thunkMiddleWare = store => next => action =>{
    if ( typeof acton === 'function') {
        acton( store.dispatch)
    } else {
        next( action)
    }

}
*/

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer( persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

/*
store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))

store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'jordan h', phone: '1234567890'}))
store.dispatch(addContact({name: 'david m', phone: '5050505050'}))


console.log(store.getState())

export default store
*/
