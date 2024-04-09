import actionTypes from "../actions/actionTypes";

const initState = {
    location: [],
    wishlist: [],
    callback: null,
    isWishlist: false,
    isAdmin: false,
    isLoading: false,
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.GET_LOCATION:
            return {
                ...state,
                location: action.data
            }

        case actionTypes.ALERT:
            return {
                ...state,
                alert: action.alert,
                callback: action.data
            }

        case actionTypes.LOADING:
            return {
                ...state,
                isLoading: action.flag
            }

        case actionTypes.WISHLIST:
            return {
                ...state,
                wishlist: action.wishlist || []
            }

        case actionTypes.ADD_WISHLIST:
            return {
                ...state,
                wishlist: action.wishlist || []
            }

        case actionTypes.SHOW_WISHLIST:
            return {
                ...state,
                isWishlist: action.flag
            }

        case actionTypes.RESET_WISHLIST:
            return {
                ...state,
                wishlist: []
            }

        case actionTypes.REMOVE_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter(item => item.id !== action.id)
            }

        default:
            return state;

    }

}

export default appReducer;