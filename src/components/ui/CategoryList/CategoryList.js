import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Typography, Divider, Stack, Button } from '@mui/material';
import Link from "next/link";

const CategoryList = async () => {
    const allCategories = await getAllCategories();
    // console.log(allCategories);
    return (
        <Box className='mt-5 bg-gray-300 px-5 py-5'>
            <Typography>CategoryList</Typography>
            <Divider />
            <Stack rowGap={1} mt={2.5}>
                {
                    allCategories.map(category => <Link href={`/category/news?category=${category.title.toLowerCase()}`} key={category._id} >
                        <Button variant="outlined" className="w-full">
                            {category.title}
                        </Button>
                    </Link>)
                }
            </Stack>
        </Box>
    )
};

export default CategoryList;
