import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { Grid, } from "@mui/material";

export const metadata = {
  title: 'Dragon News Home Page',
  description: '',
}
const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <h1>Latest News</h1>
        <LatestNews />
      </Grid>
      <Grid item xs={4}>
        <h1>SideBar</h1>
        <Sidebar />
      </Grid>

    </Grid>
  )
};

export default HomePage;

