import actionTypes from "../actions/actionTypes";

const initState = {
    isLogin: false,
    accessToken: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLogin: action.isLogin,
                accessToken: action.accessToken
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLogin: false,
                accessToken: null
            }
        default:
            return state;
    }

}

export default authReducer;