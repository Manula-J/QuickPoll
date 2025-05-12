import { Divider, List, Paper, Typography } from "@mui/material";
import React from "react";

function TrendingPolls() {
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 4,
          background: "linear-gradient(to right,#F5F7FA, #ffffff)",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Trending Polls
        </Typography>
        <Divider />
        <List sx={{ height: 500 }}>{/* Displaying polls */}</List>
      </Paper>
    </>
  );
}

export default TrendingPolls;
