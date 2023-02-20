import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    courses: [],
    filteredCourses: [],
    selectedCategory: [],
    minScore: 1,
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
            state.selectedCategory = action.payload
        },
        setMinScore: (state, action) => {
            state.minScore = action.payload;
        },
        filterCourses: (state) => {
            state.filteredCourses = [...state.courses].filter((item) => {
                if (item.tblCategories.map(c => c.Name).toLocaleString().includes(state.selectedCategory.toLocaleString()) ||
                    item.tblCategories.map(c => c.Name).toLocaleString().includes(state.selectedCategory.reverse().toLocaleString())) {
                        return item.Score >= state.minScore
                }
                return false
            })
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
        resetFilters: (state) => {
            return {
                ...state,
                selectedCategory: [],
                minScore: 1,
                filteredCourses: state.courses
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