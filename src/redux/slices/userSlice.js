import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLogged: true,
    userRole: 'student',
    userName: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {

        },
        reset: (state, action) => {
            return {
                ...state,
                ...initialState
            }
        }
    }
})

export const { setUserInfo } = userSlice.actions

export const getUserInfo = (url) => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setUserInfo(res.data)))
        .catch(err => console.log(err))
}

export default userSlice.reducer
