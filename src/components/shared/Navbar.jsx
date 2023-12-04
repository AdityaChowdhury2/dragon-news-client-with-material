'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';
import Header from './Header';

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

const Navbar = () => {
	return (
		<>
			<Header />
			<AppBar position="static" className="bg-black">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Image src={logo} alt="logo" />
						<Box className="w-full text-center">
							{navItems.map((item, idx) => (
								<Link key={idx} href={item.pathname}>
									<Button className="text-white">{item.route}</Button>
								</Link>
							))}
						</Box>
						<Box
							sx={{
								'& svg': {
									color: 'white',
								},
							}}
						>
							<Stack direction={'row'} spacing={1}>
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
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</>
	);
};
export default Navbar;
