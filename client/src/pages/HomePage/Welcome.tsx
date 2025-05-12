import { Paper, Typography } from "@mui/material";
import React from "react";

function Welcome() {
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
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          Create Your Polls. <br /> Get Immediate Validation
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
          QuickPoll lets you create and share polls with <br /> your audience in
          seconds.
        </Typography>
      </Paper>
    </>
  );
}

export default Welcome;
