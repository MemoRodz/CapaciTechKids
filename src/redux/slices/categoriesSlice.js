import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    categories: [],
};

export const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        setAllCategories:(state,action)=>{
            if (!state.categories.length) {
                state.categories = state.categories.concat(action.payload)
            }
        }
    }    
})
export const { setAllCategories } = categoriesSlice.actions

export const getAllCategories = (url) => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setAllCategories(res.data)))
        .catch(err => console.log(err))
}

export default categoriesSlice.reducer