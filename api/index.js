const api_key = "c97a96bb56254ecba0c4f92de57008a0"
const URL = 'https://newsapi.org/v2/everything'

export const searchArticles = async (query) => {
    const res = await fetch(`${URL}?q=${query}&from=2021-03-05&sortBy=popularity&apiKey=${api_key}`)
    return await res.json()
}