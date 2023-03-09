function calcAvg(arr) {
    if (arr.length === 0) return 0

    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
    const average = sum / arr.length
    return average
}

export function coursesAdapter(arr) {
    let newArr = arr && arr.map(ele => {
        let score = ele.tblReviews.length ? calcAvg(ele.tblReviews.map(e => e.Score)) : 0
        return ({
            ...ele,
            Score: score
        })
    })

    return newArr
}