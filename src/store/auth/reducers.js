import { GET_USER_FROM_URL_SUCCESS } from "./actionTypes";

const initialState = {
    user: null
}

const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_USER_FROM_URL_SUCCESS:
            const { user } = action
            return {
                ...state, user: user
            }
        default:
            return state
    }
}
export default authReducer;
