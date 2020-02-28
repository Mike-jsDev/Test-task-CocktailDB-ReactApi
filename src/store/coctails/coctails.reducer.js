import * as fromCoctailsAction from './coctails.action'

const initialState = {
    coctailsCategory: {},
    coctailsList: []
}

export function coctailsReducer(state = initialState, action) {
    switch ( action.type ) {
        case fromCoctailsAction.coctailsActionNames.FETCH_ALL_COCTAILS_FINISHED: {
            return {
                ...state,
                coctailsCategory: action.payload
            }
        }
        case fromCoctailsAction.coctailsActionNames.FETCH_COCTAILS_BY_CATEGORY_FINISHED: {
            return {
                ...state,
                coctailsList: action.payload
            }
        }
        default: {
            return state
        }
    }
}
