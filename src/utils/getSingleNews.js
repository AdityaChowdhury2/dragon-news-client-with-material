export const getSingleNews = async (id) => {
    const res = await fetch(`https://dragon-news-server-aditya.vercel.app/news/${id}`, {
        cache: 'no-store'
    })
    return res.json()
}