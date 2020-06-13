import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    isAuth: false,
    isLoading: false,
    user: null,
    token: null
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HANDLE_LOGIN_START:
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.HANDLE_LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload,
                token: "Authenticated"
            }
        case actionTypes.HANDLE_LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuth: false,
                user: action.payload,
                token: null
            }
        default: return state
    }
};

export default LoginReducer;