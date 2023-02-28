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
            return {
                ...state,
                courses: action.payload,
                filteredCourses: [...action.payload]
            }
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setMinScore: (state, action) => {
            state.minScore = action.payload;
        },
        filterCourses: (state) => {
            state.filteredCourses =  state.courses.filter(course => {      
                const courseCategories = course.tblCategories.map(category => category.Name) 
                return state.selectedCategory.every(category => { 
                  return courseCategories.includes(category)});  
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