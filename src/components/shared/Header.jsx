import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import headingImage from '@/assets/the-dragon-news.png';
import { getCurrentDate } from '@/utils/getCurrentDate';

const Header = () => {
	const date = getCurrentDate();
	return (
		<Box className="text-center">
			<Container>
				<Image
					className="mx-auto my-1"
					src={headingImage}
					width={500}
					height={100}
					alt="headingLogo"
				/>
				<Typography variant="body2" color={'gray'} className="my-1">
					Journalism Without Fear or Favour
				</Typography>
				<Typography variant="body2" color={'gray'} className="my-1">
					{date}
				</Typography>
			</Container>
		</Box>
	);
};

export default Header;
