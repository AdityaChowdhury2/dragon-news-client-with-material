import {
	Box,
	Container,
	Stack,
	IconButton,
	Button,
	Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const navItems = [
	{
		route: 'Home',
		pathname: '/',
	},
	{
		route: 'Pages',
		pathname: '/pages',
	},
	{
		route: 'Category',
		pathname: '/category',
	},
	{
		route: 'News',
		pathname: '/news',
	},
	{
		route: 'About',
		pathname: '/about',
	},
	{
		route: 'Contact',
		pathname: '/contact',
	},
];

const Footer = () => {
	return (
		<Box className="bg-black px-2 py-10">
			<Container>
				<Box
					className=""
					sx={{
						'& svg': {
							color: 'white',
						},
					}}
				>
					<Stack direction={'row'} justifyContent={'center'} spacing={1}>
						<IconButton>
							<FacebookIcon />
						</IconButton>
						<IconButton>
							<FacebookIcon />
						</IconButton>
						<IconButton>
							<FacebookIcon />
						</IconButton>
						<IconButton>
							<FacebookIcon />
						</IconButton>
					</Stack>
					<Box className="w-full text-center mt-2">
						{navItems.map((item, idx) => (
							<Link href={item.pathname} key={idx}>
								<Button className="text-white">{item.route}</Button>
							</Link>
						))}
					</Box>
					<Typography
						textAlign={'center'}
						variant="body2"
						color={'wheat'}
						mt={2}
					>
						&copy; The Dragon News. Design by Programming Hero
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
