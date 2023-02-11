import React, { useState } from "react";
import { Link } from "react-router-dom";

// mui components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// user-defined components
import { Loader } from "../components";
import Search from "../components/Search";

// utility functions
import makeSlug from "../utils/slug";

const Home = ({ results, setResults }) => {
  const [loading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie();
    setSearchVal("");
  };

  const getMovie = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=247de336&t=${searchVal}`
      );
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            disabled={searchVal.length === 0}
            endIcon={<NavigateNextOutlinedIcon />}
          >
            Search
          </Button>
        </Box>

        <section className="mt-4">
          <div className="mt-10 flex justify-center items-center">
            {loading && <Loader />}
          </div>
          {!loading ? (
            <>
              {Object.keys(results).length < 1 ? (
                <div className="mt-20">
                  <h1 className="text-3xl">
                    <SearchRoundedIcon fontSize="6" sx={{ mx: 2 }} />
                    <span>Try to search any movie</span>
                  </h1>
                </div>
              ) : results?.Error ? (
                <h1 className="text-3xl">
                  <span>Movie not found !</span>
                </h1>
              ) : (
                <>
                  <Card
                    sx={{ display: "flex", width: "fit-content", mx: "auto" }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          {results?.Title}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          {results?.Genre}
                        </Typography>

                        <Typography component="div" variant="p" sx={{ mt: 4 }}>
                          Released: {results?.Released}
                        </Typography>

                        <Typography component="div" variant="p" sx={{ my: 1 }}>
                          Country: {results?.Country}
                        </Typography>

                        <Typography component="div" variant="p" sx={{ my: 1 }}>
                          imdb Rating: {results?.imdbRating}
                        </Typography>

                        <Button
                          sx={{ mt: 3 }}
                          size="medium"
                          variant="contained"
                          color="primary"
                        >
                          <Link
                            to={`/movie/${makeSlug(results?.Title)}`}
                            className="text-white decoration-0 hover:text-white"
                          >
                            Read more
                          </Link>
                        </Button>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 250, bgcolor: "pink" }}
                      image={results?.Poster}
                      alt="Movie poster"
                    />
                  </Card>
                </>
              )}
            </>
          ) : null}
        </section>
      </main>
    </>
  );
};

export default Home;
