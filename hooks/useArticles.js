import React from 'react'
import * as api from "../api";

export default function useArticles(Query) {

    const [Articles, setArticles] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        (async () => {
            setLoading(true)
                const data = await api.searchArticles(Query)
                setArticles(data.articles)
            setLoading(false)
        })()
    }, [])

    return {
        Articles,
        loading
    }
}
