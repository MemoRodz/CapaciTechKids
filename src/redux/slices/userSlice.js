import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLogged: true,
    userRole: '',
    userName: '',
    email: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            if (action.payload) {
                const { name, UserType, email, picture } = action.payload
                return {
                    ...state,
                    isLogged: true,
                    userRole: UserType.toLowerCase(),
                    userName: name,
                    email: email
                }
            }
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

export const getUserInfo = (url, email) => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setUserInfo(res.data.find(ele => ele.Email === email))))
        .catch(err => console.log(err))
}

export const createUser = (url, user) => (dispatch) => {
    axios.post(url, user)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export default userSlice.reducer
