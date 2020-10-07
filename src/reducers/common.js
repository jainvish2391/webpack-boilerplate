
import omit from 'lodash/omit'
import constants from '../constants'
const { REDUX_ACTIONS } = constants

const initialState = {
    loadingComponents: {}
}

const common = (state = initialState, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.REQUEST_INITIATED:
            return {
                ...state,
                loadingComponents: { ...state.loadingComponents, [action.componentId]: true }
            }
        case REDUX_ACTIONS.REQUEST_COMPLETED:
            return {
                ...state,
                loadingComponents: omit(state.loadingComponents, [action.componentId])
            }
        case REDUX_ACTIONS.REQUEST_FAILED:
            return {
                ...state,
                loadingComponents: omit(state.loadingComponents, [action.componentId])
            }
    default:
        return state
    }
}

export default common