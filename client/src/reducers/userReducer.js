import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../constants/userConstant"

const initialState={
    user:{},
    isAuthenticated:false,
  
  }
export const userReducer=(state=initialState,action)=>{
switch(action.type)
{
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case USER_REQUEST:
        return{
            loading:true,
            isAuthenticated:false
        };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case USER_SUCCESS:
        return{
            ...state,
            loading:false,
            isAuthenticated:true,
            user:action.payload
        };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case USER_FAIL:
        return {
            ...state,
            loading: false,
            isAuthenticated:false,
            error: action.payload,
          };
    default:
        return state;
}
}