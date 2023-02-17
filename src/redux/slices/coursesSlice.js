import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    courses: [],
    selectedCategory: "all",
    minScore: 1,
    filteredCourses: [],
};

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setAllCourses: (state, action) => {
            if (!state.courses.length) {
                state.courses = state.courses.concat(action.payload)
                state.filteredCourses = [...state.courses]
            }
        },
        selectCategory: (state, action) => {
            state.selectedCategory=action.payload
            // state.selectedCategory = [...state.filteredCourses.map(category=>{
            //     if(category.Name===action.selectCategory){
            //         console.log(">>>>>>>>>",selectCategory);
            //         return category
            //     }
            // })]
        },
        setMinScore: (state, action) => {
            state.minScore = action.payload;
        },
        filterCourses: (state) => {
            state.filteredCourses = state.courses.filter((item) => {

                if (state.selectedCategory === "all" || item.categories === state.selectedCategory) {
                    return item.Score >= state.minScore;
                }
                return false;
            });
        },
        sortByScore: (state, action) => {
            if (action.payload === 'maxMin') {
                let arr = [...state.filteredCourses].sort(function (a, b) {
                    return b.Score - a.Score
                })
                return {
                    ...state,
                    filteredCourses: arr
                }
            } else if ('minMax') {
                let arr = [...state.filteredCourses].sort(function (a, b) {
                    return a.Score - b.Score
                })
                return {
                    ...state,
                    filteredCourses: arr
                }
            }
        },
        resetFilters: (state, action) => {
            state.filteredCourses = state.courses
            return {
                ...state
            }
        }
    }
})



export const { selectCategory, setMinScore, filterCourses, sortByScore, resetFilters, setAllCourses } = coursesSlice.actions

export const getAllCourses = (url) => (dispatch) => {
    axios.get(url)
        .then(res => dispatch(setAllCourses(res.data)))
        .catch(err => console.log(err))
}



export default coursesSlice.reducer