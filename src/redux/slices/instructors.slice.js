import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    instructors: [],
}

export const instructorsSlice = createSlice({
    name: 'instructors',
    initialState,
    reducers: {
        setInstructors: (state, action) => {
            let arr = [...state.instructors].push(action.payload)
            return {
                ...state,
                instructors: arr
            }
        }
    }
})

export const { setInstructors } = instructorsSlice.actions
 
export const getAllInstructors = (url) => (dispatch) => {
    axios.get(url)
    .then(res => dispatch(setInstructors(res.data)))
    .catch(err => console.log(err))
}

export default instructorsSlice.reducer