import { Box, CircularProgress } from "@mui/material";
import logo1 from "../../assets/img/cryptea.png";
import logo from "../../assets/img/cryptea logo.svg";
const Loader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full">
      <div className="flex items-center justify-center">
        <img src={logo} alt="cryptea" width={30} className="mr-[5px]" />
        <a className="text-black text-2xl font-bold">CRYPTEA</a>
        {/* <img src={logo1} alt="cryptea" width={100} /> */}
      </div>
      <Box
        className="text-[#F57059] mt-11 justify-center "
        sx={{ display: "flex" }}
      >
        <CircularProgress className="!w-[60px] !h-[60px]" color="inherit" />
      </Box>
    </div>
  );
};

export default Loader;
