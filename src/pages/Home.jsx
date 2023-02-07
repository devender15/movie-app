import React, { useState } from "react";

import { Loader } from "../components";

import { Box, Grid } from "@mui/material";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <Loader />}

      <header>
        <h1 className="text-3xl font-semibold text-black my-2">Movie App 🎬</h1>
      </header>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <p>Hey</p>
          </Grid>
          <Grid item xs={4}>
            <p>Hey</p>
          </Grid>
          <Grid item xs={4}>
            <p>Hey</p>
          </Grid>
          <Grid item xs={8}>
            <p>Hey</p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
