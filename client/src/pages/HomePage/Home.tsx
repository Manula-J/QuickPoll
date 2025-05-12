import React from "react";
import { Grid } from "@mui/material";
import TrendingPolls from "./TrendingPolls";
import Welcome from "./Welcome";

const Home = () => {
  return (
    <div>
      <Grid container spacing={6} sx={{ padding: 5 }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Welcome />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TrendingPolls />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
