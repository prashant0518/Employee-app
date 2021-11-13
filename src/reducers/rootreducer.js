
import { combineReducers } from 'redux'

import { authReducer } from './authReducer'
import { addemployeeReducer, removeitems, setemployeereducer,setsinglereducer } from './primaryreducer'

const rootreducer = combineReducers({
    allreducer:setemployeereducer,
    authReducer
//    addEmpReducer:addemployeeReducer,
    
})


export default rootreducer
