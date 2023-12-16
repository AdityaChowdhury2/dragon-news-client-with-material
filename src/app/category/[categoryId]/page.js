import { getCategoryNews } from "@/utils/getCategoryNews";
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from "@mui/material"
import Image from "next/image";
import Link from "next/link";

const DynamicNewsPage = async ({ searchParams }) => {

    const data = await getCategoryNews(searchParams.category);
    return (
        <div>
            <p> Hello I Am DynamicNewsPage for {searchParams.category} news in {data.length} </p>
            {data.length}
            <Grid
                className="mt-4"
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
                {
                    data.map(news =>
                        <Grid key={news._id} item xs={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card>
                                    <CardActionArea>
                                        <CardMedia sx={{
                                            "& img": {
                                                width: '100%',
                                                height: '250px'
                                            }
                                        }}>
                                            <Image width={800}
                                                height={100}
                                                src={news.thumbnail_url} alt="image1" />
                                        </CardMedia>
                                        <CardContent className="flex-grow">
                                            <p className="bg-red-500 w-fit px-2 py-1 text-white rounded-md text-xs">
                                                {news.category}
                                            </p>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                sx={{
                                                    marginTop: '8px',
                                                }}
                                            >
                                                {news.title.length > 30 ? news.title.slice(0, 30) + '...' : news.title}
                                            </Typography>
                                            <Typography gutterBottom variant="body2"
                                            >
                                                By {news.author.name} - {news.author.published_date}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                color="text.secondary"
                                                textAlign={'justify'}
                                                className="text-xs"
                                            >
                                                {news.details.length > 200 ? news.details.slice(0, 200) + '...' : news.details}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card></Link>
                        </Grid>)
                }
            </Grid>
        </div>
    )
};

export default DynamicNewsPage;
