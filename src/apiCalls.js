const apiCalls = {

    getData: (url) => {
        return fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    },

    postReview: (newReview) => {
        return fetch('http://localhost:3000/api/v1/reviews', {
            method: "POST",
            body: JSON.stringify(newReview),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error()
                }
            })
            .catch(err => err)
    }
}

export default apiCalls