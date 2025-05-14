import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

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
        <Typography
          variant="h3"
          gutterBottom
          sx={{ textAlign: "center", my: 2 }}
        >
          Create Your Polls. <br /> Get Immediate Validation
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", my: 1 }}
        >
          QuickPoll lets you create and share polls with <br /> your audience in
          seconds.
        </Typography>
        <Box sx={{ textAlign: "center", my: 2 }}>
          <Button
            variant="text"
            color="primary"
            sx={{
              alignContent: "center",
              minWidth: 150,
              minHeight: 40,
              fontWeight: "bold",
              backgroundColor: "grey.400",
              color: "white",
              my: "auto",
              "&:hover": {
                backgroundColor: "grey.500",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            Create Poll
          </Button>
        </Box>
        <Divider sx={{ pt: 1 }} />

        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", py: 2 }}
        >
          How to Get Started
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", px: 8 }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 4,
              minWidth: 180,
              minHeight: 100,
              textAlign: "center",
              background: "linear-gradient(to right,#F5F7FA,#ffffff)",
            }}
          >
            <Box
              sx={{
                minWidth: 35,
                minHeight: 35,
                bgcolor: "rgba(110, 110, 110, 0.75)",
                display: "inline-block",
                borderRadius: 50,
                textAlign: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6">2</Typography>
            </Box>
            <Typography variant="h6">
              Enter your <br /> question
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 4,
              minWidth: 180,
              minHeight: 100,
              textAlign: "center",
              background: "linear-gradient(to right,#F5F7FA,#ffffff)",
            }}
          >
            <Box
              sx={{
                minWidth: 35,
                minHeight: 35,
                bgcolor: "rgba(110, 110, 110, 0.75)",
                display: "inline-block",
                borderRadius: 50,
                textAlign: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6">1</Typography>
            </Box>
            <Typography variant="h6">
              Add <br /> options
            </Typography>
          </Paper>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 4,
              minWidth: 180,
              minHeight: 100,
              textAlign: "center",
              background: "linear-gradient(to right,#F5F7FA,#ffffff)",
            }}
          >
            <Box
              sx={{
                minWidth: 35,
                minHeight: 35,
                bgcolor: "rgba(110, 110, 110, 0.75)",
                display: "inline-block",
                borderRadius: 50,
                textAlign: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6">3</Typography>
            </Box>
            <Typography variant="h6">
              Share & <br /> get results
            </Typography>
          </Paper>
        </Box>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", py: 2, fontFamily: "monospace" }}
        >
          It's that&nbsp;
          <Typewriter
            words={["simple!", "easy!", "convenient!"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2500}
          />
        </Typography>
      </Paper>
    </>
  );
}

export default Welcome;
