import { combineReducers } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlice';
import categoriesReducer from './slices/categoriesSlice'
import instructorsReducer from './slices/instructorsSlice'
import userReducer from './slices/userSlice'

const rootReducer = combineReducers({
    courses: coursesReducer,
    categories: categoriesReducer,
    instructors: instructorsReducer,
    user: userReducer
});

export default rootReducer;