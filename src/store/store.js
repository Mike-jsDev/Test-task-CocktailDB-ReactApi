import {applyMiddleware, createStore} from 'redux'
import {composeEnhancers} from './utils'
import * as fromRoot from './index.reducer'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'

function configureStore() {
    const getLogger = () => {
        return createLogger({collapsed: true})
    }

    const enhancer = composeEnhancers(
        applyMiddleware(
            thunk,
            getLogger()
        )
    )
    return createStore(fromRoot.reducers, {}, enhancer)
}

const store = configureStore()
export default store;