import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    courses: [
        { id: 1, name: "Item 1", category: "category1", score: 8 },
        { id: 2, name: "Item 2", category: "category2", score: 6 },
        { id: 3, name: "Item 3", category: "category1", score: 7 },
        { id: 4, name: "Item 4", category: "category3", score: 9 },
        { id: 5, name: "Item 5", category: "category2", score: 5 },
      ],
    selectedCategory: "all",
    minScore: 6,
    filteredCourses: [],
};

export const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setAllCourses: (state,action) => {
            state.courses.concat(action.payload)
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setMinScore: (state, action) => {
            state.minScore = action.payload;
        },
        filterCourses: (state) => {
            state.filteredCourses = state.courses.filter((item) => {
                if (state.selectedCategory === "all" || item.category === state.selectedCategory) {
                    return item.score >= state.minScore;
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
        reset: (state, action) => {
            state.filteredCourses = state.courses
            return {
                ...state
            }
        }
    }
})



export const { selectCategory, setMinScore, filterCourses, sortByScore, reset, setAllCourses } = coursesSlice.actions

export const getAllCourses = (url) => (dispatch) => {
    axios.get(url)
    .then(res=>dispatch(setAllCourses(res.data)))
    .catch(err => console.log(err))
}

export default coursesSlice.reducer