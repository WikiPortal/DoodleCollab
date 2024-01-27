import React from "react";
import Grid from '@mui/system/Unstable_Grid';
import img1 from '../../assets/Features/img1.png';
import img2 from '../../assets/Features/img2.png';
import { Link } from "react-router-dom";

import { FaArrowDown } from "react-icons/fa";

const Features = () => {
  return (
    <Grid container sx={{ display:'flex',justifyContent:'space-between', marginX: 'auto', marginTop: '8%', backgroundColor: '#E9F6FF', paddingTop:'5%', height: '530px', maxWidth: '1000px', borderRadius: '25px' }}>
      <Grid container sx={{ height: '70%', marginLeft: '5%', maxWidth: '550px' }}>
        <p className="text-7xl .leading-snug font-black" style={{ color: '#192655' }}>Worked with quite a number of opensource programs till now!</p>
        <img src={img1} style={{ marginLeft: '-25%', marginTop: '-12%', width: '60%', height: '60%' }} alt="img1" />
        <img src={img2} style={{ width: '50%', height: '60%', marginTop: '-20%', marginLeft: '15%' }} alt="img2" />
      </Grid>

      <Grid container sx={{ height: '200px', maxWidth: '300px'}}>
        <div style={{ display: 'flex', alignItems: 'center', }}>
          <Link to="https://kwoc.kossiitkgp.org/" style={{ paddingLeft: '10px', paddingRight: '10px', color: '#435585' }} className="font-medium text-base">Kharagpur Winter of Code 
          <FaArrowDown style={{ color: '#7743DB', marginTop:'-10%', marginLeft:'105%' }} /></Link>
        </div>
        <hr style={{ width: '100%',   marginLeft: '10px', marginTop: '10px', marginBottom: '5px', borderColor: '#93BFCF', marginRight:'20px' }} />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '-11%'}}>
          <Link to="https://winterofcode.com/ " style={{ paddingLeft: '10px', color: '#435585' }} className="font-medium text-base">Netaji Subhash Engineering College Winter of Code <FaArrowDown style={{ color: '#7743DB', marginTop: '-8%', marginLeft: '84%' }} /> </Link>
        </div>
        <hr style={{ width: '100%', marginLeft: '10px', marginTop: '10px', marginBottom: '5px', borderColor: '#93BFCF', marginRight:'20px'  }} />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '-11%'}}>
          <Link to="https://iwoc.codes/" style={{ paddingLeft: '10px', color: '#435585' }} className="font-medium text-base"> Innogeeks Winter of Code <FaArrowDown style={{ color: '#7743DB', marginTop: '-10%', marginLeft:'107%' }} /></Link>
          
        </div>
      </Grid>
    </Grid>
  );
};

export default Features;
