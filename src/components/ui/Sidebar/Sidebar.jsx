import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Image from 'next/image';
import image4 from '@/assets/image4.png';

const Sidebar = () => {
	return (
		<Box my={2}>
			<Card>
				<CardActionArea>
					<CardMedia>
						<Image src={image4} className="w-full" alt="image4" />
					</CardMedia>
					<CardContent>
						<p className="bg-red-500 w-fit px-2 py-1 text-white rounded-md text-xs">
							Technology
						</p>
						<Typography
							gutterBottom
							sx={{
								marginTop: '8px',
							}}
						>
							Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
						</Typography>
						<Typography gutterBottom variant="body2">
							By Aditya Chowdhury - 18 Mar, 2024
						</Typography>
						<Typography
							variant="body1"
							color="text.secondary"
							className="text-xs"
						>
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout........
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	);
};

export default Sidebar;
