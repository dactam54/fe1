import actionTypes from "./actionTypes";
import { apiGetAllLocation } from "../../api/locationApi";


export const getAllLocation = () => async (dispatch) => {
    try {
        const response = await apiGetAllLocation()
        if (response.status === 200) {
            dispatch({
                type: actionTypes.GET_LOCATION,
                data: response.data
            })
        }
    } catch (error) {
        dispatch({
            type: actionTypes.ALERT,
            data: null
        })
    }
}

