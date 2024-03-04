import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      {/* <h2 style={{color:'red'}}>Youtube</h2> */}
      <h2 className="red-text" style={{ fontFamily: 'Arial, sans-serif' ,color:'red'}}>Youtube</h2>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
