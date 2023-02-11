import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

import { Loader } from "../components";
import Search from "../components/Search";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [results, setResults] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=247de336&t=${searchVal}`)
      .then((response) => response.json())
      .then((data) => setResults(data))
      .then(setLoading(false));

    setSearchVal("");
  };

  return (
    <>
      <header>
        <h1 className="text-3xl font-semibold text-teal-500 my-2">
          Movie App 🎬
        </h1>
      </header>

      <main className="mt-10 ">
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              mt: 4,
              width: "25ch",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={handleSubmit}
        >
          <Search searchVal={searchVal} setSearchVal={setSearchVal} />

          <Button
            size="large"
            varient="outlined"
            type="submit"
            sx={{
              ":hover": {
                bgcolor: "primary.main",
                color: "white",
              },
            }}
            endIcon={<NavigateNextOutlinedIcon />}
          >
            Search
          </Button>
        </Box>

        <section className="mt-4">
          {loading && <Loader />}
          {Object.keys(results).length < 1 ? (
            <div className="mt-20">
              <h1 className="text-3xl">
                <SearchRoundedIcon fontSize="6" sx={{ mx: 2 }} />
                <span>Try to search any movie</span>
              </h1>
            </div>
          ) : (
            <></>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
