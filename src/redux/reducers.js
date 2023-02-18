import { combineReducers } from '@reduxjs/toolkit';
import coursesReducer from './slices/coursesSlice';
import { categoriesReducer } from './slices';
import { instructorsReducer } from './slices';


const rootReducer = combineReducers({
    courses: coursesReducer,
    categories:categoriesReducer,
    instructors: instructorsReducer
});

export default rootReducer;