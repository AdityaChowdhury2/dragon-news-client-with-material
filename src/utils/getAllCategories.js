export const getAllCategories = async () => {
    const res = await fetch(`https://dragon-news-server-aditya.vercel.app/categories`);
    return res.json()
}