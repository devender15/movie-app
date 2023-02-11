import React from "react";

import TextField from "@mui/material/TextField";

const Search = ({ searchVal, setSearchVal }) => {
  return (
    <TextField
      label="Search Movie"
      variant="standard"
      value={searchVal}
      sx={{ fontSize: "2.1rem" }}
      inputProps={{ style: { fontFamily: "sans-serif", color: "lightgreen", fontSize: "1.6rem", fontWeight: 700 } }}
      InputLabelProps={{ style: {
        color: "wheat",
        fontSize: "1.3rem"
      }}}
      onChange={(e) => setSearchVal(e.target.value)}
    />
  );
};

export default Search;
