export const fetchCourses = async (url) => {
    return fetch(url).then(res => res.json())
}