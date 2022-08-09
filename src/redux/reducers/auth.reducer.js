import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOAD_PROFILE, LOG_OUT } from '../actionType';


const initialState = {
        accessToken: sessionStorage.getItem('accessToken') ? sessionStorage.getItem('accessToken') : null,
        user: sessionStorage.getItem('profile') ? JSON.parse(sessionStorage.getItem('profile')) : null,
        loading: false,
}
export const authReducer = (prevState = initialState, action) => {
        const { type, payload } = action;
        switch (type) {
                case LOGIN_REQUEST:
                        return {
                                ...prevState,
                                loading: true,
                        }
                case LOGIN_SUCCESS:
                        return {
                                ...prevState,
                                accessToken: payload.accessToken,
                                // user: payload.user,
                                loading: false,
                        }
                case LOGIN_FAIL:
                        return {
                                ...prevState,
                                accessToken: null,
                                loading: false,
                                error: payload,
                        }
                case LOAD_PROFILE:
                        return {
                                ...prevState,
                                user: payload,
                        }
                case LOG_OUT:
                        return {
                                ...prevState,
                                accessToken: null,
                                user: null,
                        }
                default:
                        return prevState;

        }


}

