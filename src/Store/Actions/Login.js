import * as actionTypes from './ActionTypes';
import Axios from 'axios';

export const handleLogin = (user) => async (dispatch) => {
    dispatch({
        type: actionTypes.HANDLE_LOGIN_START
    })
    try {
        const res = await Axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({
            type: actionTypes.HANDLE_LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: actionTypes.HANDLE_LOGIN_FAIL,
            payload: err
        })
    }
}