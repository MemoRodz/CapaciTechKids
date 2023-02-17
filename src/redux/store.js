import {configureStore} from '@reduxjs/toolkit'
import {coursesReducer, instructorsReducer,categoriesReducer} from './slices/index'

export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        categories:categoriesReducer,
        instructors: instructorsReducer
    },  
})