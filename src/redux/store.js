import {configureStore} from '@reduxjs/toolkit'
import {coursesReducer, instructorsReducer} from './slices/index'

export const store = configureStore({
    reducer: {
        courses: coursesReducer,
        instructors: instructorsReducer
    },  
})