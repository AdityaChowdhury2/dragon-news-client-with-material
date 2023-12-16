import { getSingleNews } from "@/utils/getSingleNews";
import { Container, Grid, Box, Typography, Avatar, Stack } from "@mui/material"
import Image from "next/image";

const NewsDetailPage = async ({ params }) => {
    const news = await getSingleNews(params.newsId);

    return (
        <Box>
            <Container>
                <Grid container spacing={4} mt={1}>
                    <Grid item lg={6}>
                        <Image src={news.thumbnail_url} width={800} height={400} alt="news Image" />
                        <Grid container spacing={2} mt={1}>
                            <Grid item lg={6}>
                                <Image src={news.image_url} width={800} height={400} alt="news Image" />
                            </Grid>
                            <Grid item lg={6}>
                                <Image src={news.image_url} width={800} height={400} alt="news Image" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={6}>
                        <Typography variant="h5" component={'h2'}>
                            {news.title}
                        </Typography>
                        <Stack direction={'row'} alignItems={'center'} spacing={2}>
                            <Avatar alt={news.author.name.slice(0, 1)} src={news.author.img} />
                            <Typography> By {news.author.name}</Typography>
                            <Typography textAlign={'center'} > Publish: {news.author.published_date}</Typography>
                        </Stack>
                        <Typography textAlign={'justify'} py={2} mt={2} whiteSpace={'pre-line'}>{news.details}</Typography>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
};

export default NewsDetailPage;
