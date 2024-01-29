import Grid from "@mui/system/Unstable_Grid";
import img1 from "../../assets/Features/img1.png";
import img2 from "../../assets/Features/img2.png";
import { Link } from "react-router-dom";

import { FaArrowDown } from "react-icons/fa";
import { Divider } from "@mui/material";

const Features = () => {
  return (
    <Grid
      container
      sx={{
        marginX: "auto",
        marginTop: { xs: "6rem", md: "8rem" },
        backgroundColor: "#E9F6FF",
        maxWidth: "1000px",
        borderRadius: "25px",
        padding: { xs: "0.8rem", sm: "2rem" },
      }}
      spacing={2}
    >
      <Grid xs={12} sm={8}>
        <div className="relative">
          <h1 className="text-5xl md:text-[4rem] lg:text-7xl .leading-snug font-black text-[#192655]">
            Worked with quite a number of opensource programs till now!
          </h1>
          <img
            src={img1}
            className="size-32 xs:size-48 md:size-72 object-contain absolute -top-14 -right-14 xs:top-[80%] md:top-[75%] xs:-left-[20%]"
            alt="img1"
            aria-hidden
          />
          <img
            src={img2}
            className="size-52 xs:size-60 md:size-80 absolute -right-10 xs:-right-[10%] object-contain -bottom-24 xs:-bottom-[45%]  md:-bottom-[40%]"
            alt="img2"
            aria-hidden
          />
        </div>
      </Grid>

      <Grid xs={12} sm={4}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link
            to="https://kwoc.kossiitkgp.org/"
            className="font-medium text-base inline-flex items-center gap-2 text-[#435585] hover:text-[#192655]"
            target="blank"
          >
            Kharagpur Winter of Code
            <FaArrowDown className="text-[#7743DB] -rotate-90 shrink-0" />
          </Link>
        </div>
        <Divider sx={{ width: "100%", marginBlock: "1rem" }} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            to="https://winterofcode.com/ "
            className="font-medium text-base inline-flex items-center gap-2 text-[#435585] hover:text-[#192655]"
            target="blank"
          >
            Netaji Subhash Engineering College Winter of Code{" "}
            <FaArrowDown className="text-[#7743DB] -rotate-90 shrink-0" />{" "}
          </Link>
        </div>

        <Divider sx={{ width: "100%", marginBlock: "1rem" }} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            to="https://iwoc.codes/"
            className="font-medium text-base inline-flex items-center gap-2 text-[#435585] hover:text-[#192655]"
            target="blank"
          >
            {" "}
            Innogeeks Winter of Code{" "}
            <FaArrowDown className="text-[#7743DB] -rotate-90 shrink-0" />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default Features;
