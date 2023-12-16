import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Image from 'next/image';
import topNews from '@/assets/topNews.png';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import image4 from '@/assets/image4.png';
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async () => {
	const allNews = await getAllNews();
	// console.log(allNews);
	return (
		<Box className="my-4">
			<Card>
				<CardActionArea>
					<CardMedia>
						<Image
							width={800}
							height={400}
							src={allNews[0].thumbnail_url}
							className="w-full"
							alt="topNews"
						/>
					</CardMedia>
					<CardContent>
						<p className="bg-red-500 w-fit px-2 py-1 text-white rounded-md text-xs">
							{allNews[0].category}
						</p>
						<Typography
							gutterBottom
							variant="h5"
							component="div"
							sx={{
								marginTop: '8px',
							}}
						>
							{allNews[0].title}
						</Typography>
						<Typography gutterBottom variant="body2">
							By {allNews[0].author.name} - {allNews[0].author.published_date}
						</Typography>
						<Typography variant="body1" color="text.secondary">
							{allNews[0].details.slice(0, 200) + '...'}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
			<Grid
				className="mt-4"
				container
				rowSpacing={2}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
			>
				{allNews.slice(1, 5).map(news => (
					<Grid key={news._id} item xs={6}>
						<Card>
							<CardActionArea>
								<CardMedia
									sx={{
										'& img': {
											height: '170px',
										},
									}}
								>
									<Image
										src={news.thumbnail_url}
										width={300}
										height={300}
										className="w-full"
										alt="image1"
									/>
								</CardMedia>
								<CardContent>
									{/* <p className="bg-red-500 w-fit px-2 py-1 text-white rounded-md text-xs">
										{news.category}
									</p> */}
									<Typography
										gutterBottom
										variant="h6"
										fontSize={'16px'}
										component="h2"
										sx={{
											marginTop: '8px',
										}}
									>
										{news.title.slice(0, 25) + '...'}
									</Typography>
									<Typography gutterBottom variant="body2">
										By {news.author.name} - {news.author.published_date}
									</Typography>
									<Typography
										variant="body1"
										color="text.secondary"
										className="text-xs"
									>
										{news.details.slice(0, 100) + '...'}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				))}
				{/* <Grid item xs={6}>
					<Card>
						<CardActionArea>
							<CardMedia>
								<Image src={image2} className="w-full" alt="image2" />
							</CardMedia>
							<CardContent>
								<Typography
									gutterBottom
									sx={{
										marginTop: '8px',
									}}
								>
									Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
									Again
								</Typography>
								<Typography gutterBottom variant="body2">
									By Aditya Chowdhury - 18 Mar, 2024
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									className="text-xs"
								>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its
									layout........
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card>
						<CardActionArea>
							<CardMedia>
								<Image src={image3} className="w-full" alt="image3" />
							</CardMedia>
							<CardContent>
								<Typography
									gutterBottom
									sx={{
										marginTop: '8px',
									}}
								>
									Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
									Again
								</Typography>
								<Typography gutterBottom variant="body2">
									By Aditya Chowdhury - 18 Mar, 2024
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									className="text-xs"
								>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its
									layout........
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card>
						<CardActionArea>
							<CardMedia>
								<Image src={image4} className="w-full" alt="image4" />
							</CardMedia>
							<CardContent>
								<Typography
									gutterBottom
									sx={{
										marginTop: '8px',
									}}
								>
									Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
									Again
								</Typography>
								<Typography gutterBottom variant="body2">
									By Aditya Chowdhury - 18 Mar, 2024
								</Typography>
								<Typography
									variant="body1"
									color="text.secondary"
									className="text-xs"
								>
									It is a long established fact that a reader will be distracted
									by the readable content of a page when looking at its
									layout........
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid> */}
			</Grid>
		</Box>
	);
};

export default LatestNews;
