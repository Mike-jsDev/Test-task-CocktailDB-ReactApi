import {applyMiddleware, createStore} from 'redux'
import * as fromRoot from './index.reducer'
import thunk from 'redux-thunk'



const store = createStore(fromRoot.reducers, applyMiddleware(thunk))
export default store;