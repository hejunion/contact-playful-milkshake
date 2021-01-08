import {combineReducers} from 'redux'

import {UPDATE_USER, UPDATE_CONTACT, LOG_IN_SENT,LOG_IN_FULLFILLED, LOG_IN_RJECTED} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) return [...state, action.payload]
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return merge(state, action.payload)
    case UPDATE_CONTACT:
      return merge(state, {prevContact: action.payload})
    case LOG_IN_FULLFILLED:
      return merge(state, {token: action.payload, loginErr:''})
    case LOG_IN_RJECTED:
      return merge( state, {loginErr: action.payload})
    default:
      return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
})

export default reducer
