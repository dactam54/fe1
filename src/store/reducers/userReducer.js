import actionTypes from "../actions/actionTypes";
const initState = {
    updateCurrentUser: false,
    wishlists: [],
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_CURRENT_USER:
            return {
                ...state,
                updateCurrentUser: !state.updateCurrentUser

            }
        case actionTypes.ADD_WISHLIST:
            return {
                ...state,
                wishlists: [...state.wishlists, action.data]
            }
        case actionTypes.REMOVE_WISHLIST:
            return {
                ...state,
                wishlists: state.wishlists.filter(wishlist => wishlist.id !== action.id)
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                updateCurrentUser: false,
                wishlists: []
            }
        default:
            return state;
    }

}
export default userReducer;