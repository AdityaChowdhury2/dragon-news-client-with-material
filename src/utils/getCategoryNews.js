export const getCategoryNews = async (category) => {

    const res = await fetch(`https://dragon-news-server-aditya.vercel.app/news?category=${category}`, {
        cache: 'no-store'
    })
    const data = await (res.json());
    return data
}