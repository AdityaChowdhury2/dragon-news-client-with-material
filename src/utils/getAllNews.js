export const getAllNews = async () => {
    const res = await fetch(`https://dragon-news-server-aditya.vercel.app/news`, {
        next: {
            revalidate: 30,
        }
    });
    return res.json();
}