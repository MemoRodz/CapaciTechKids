import useSWR from 'swr'
import { coursesAdapter } from '../utils/coursesAdapter'
import {fetchCourses} from '../services/fetchCourses'
import { baseUrl } from '../models/baseUrl'

export function useCourses() {
    const { data, error, isLoading } = useSWR(`${baseUrl}/courses`,fetchCourses, {
        refreshInterval: 1000
    })


    return{
        data,
        isError: error,
        isLoading
    }
}