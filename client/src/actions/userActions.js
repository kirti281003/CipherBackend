import axios from "axios";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../constants/userConstant";
export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
     
      const { data } = await axios.post(`/api/v1/login`,
        { email, password },
        config
      );
      console.log(data);
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
      dispatch({ type: LOGIN_FAIL, payload:error.response.data.error});
    }
  };
  export const register=(name,email,password)=>async(dispatch)=>{
    try {
      dispatch({ type: REGISTER_REQUEST});
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const { data } = await axios.post(
        `/api/v1/register`,
        { name,email,password},
        config
      );
      console.log(data);
  
      dispatch({ type: REGISTER_SUCCESS, payload: data.user });
    } catch (error) {
        console.log(error);
      dispatch({ type: REGISTER_FAIL, payload:error.response.data.error});
    }

  }
  export const getUser=()=>async(dispatch)=>{
    try{
      dispatch({
        type:USER_REQUEST
      })
      const {data}=await axios.get(`/api/v1/user`);
      console.log(data);
      dispatch({
        type:USER_SUCCESS,
        payload:data.user
      })

    }
    catch(error)
    {
      dispatch({
        type:USER_FAIL,
        payload:error.response.data.error
      })

    }
  }

  export const updateUser=(name,email,photo)=>async(dispatch)=>{
    try{
        dispatch({
            type:UPDATE_USER_REQUEST
        })
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const {data}=await axios.put(`/api/v1/update`,
        {name,email,photo},
        config);
        dispatch({
            type:UPDATE_USER_SUCCESS,
            payload:data.updatedUser
        })
    }
    catch(error)
    {
        dispatch({
            type:UPDATE_USER_FAIL,
            payload:error.response.data.error
        })
    }
  }
  export const updateUserInterests=(interests)=>async(dispatch)=>{
    try{
        dispatch({
            type:UPDATE_USER_REQUEST
        })
        const config = { headers: { "Content-Type": "application/json" } };
        const {data}=await axios.put(`/api/v1/update`,
        {interests},
        config);
        dispatch({
            type:UPDATE_USER_SUCCESS,
            payload:data.updatedUser
        })
    }
    catch(error)
    {
        dispatch({
            type:UPDATE_USER_FAIL,
            payload:error.response.data.error
        })
    }
  }
  export const updateUserPassword=(currentPassword,newPassword,confirmPassword)=>async(dispatch)=>{
    try{
        dispatch({
            type:UPDATE_PASSWORD_REQUEST
        })
        const config = { headers: { "Content-Type": "application/json" } };
        const {data}=await axios.post(`/api/v1/user/updatePassword`,
        {currentPassword,newPassword,confirmPassword},
        config);
        dispatch({
            type:UPDATE_PASSWORD_SUCCESS,
            payload:data.user
        })
    }
    catch(error)
    {
        dispatch({
            type:UPDATE_PASSWORD_FAIL,
            payload:error.response.data.error
        })
    }
  }