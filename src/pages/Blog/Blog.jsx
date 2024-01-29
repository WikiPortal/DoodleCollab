import React from 'react';
import Navbar from '../../constants/Navbar/Navbar';

import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useEffect } from 'react';
import { useState } from 'react';

export default function Blog({ isBarsClicked, handleBarsClick }) {

    const dark = false;    
  const cardStyle = {
    backgroundColor: dark ? 'white' : 'black',
    color: dark ? 'black' : 'white',
    height: '100%',
    maxWidth: '80%',
  };
    const items = [
        {'id':1, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':2, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':3, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':4, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':5, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':6, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':7, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':8, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':9, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':10, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':11, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
        {'id':12, 'heading':'Heading', 'content':"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet justo nec orci efficitur dictum.", "link":"https://google.com"},
    ];

    return (
        <div style={{ overflowY: 'auto', maxHeight: '500px', padding: '0' , marginTop: isBarsClicked ? '300px' : '0px' }}>
            <Grid container spacing={3} style={{ margin: '0 auto', maxWidth: '100%', overflowX: 'hidden', padding: '0' }}>
                {items.map((item) => (
                    <Grid key={item.id} item xs={12} sm={6} md={4} style={{ margin: '0' }}>
                        <Box style={{ height: '100%' }}>
                            <Card style={cardStyle}>
                                <CardContent>
                                    <Typography variant='h4' paddingBottom={10}>{item.heading}</Typography>
                                    <div style={{ borderTop: dark ? '2px solid black' : '2px solid white',  maxWidth:'70%' }}>
                                        <Typography variant='p' padding={1} fontSize={10}>{item.content}</Typography>
                                    </div>
                                    <br />
                                    <Link to={item.link} style={{ display: 'flex', alignItems: 'center', fontSize: '18px', whiteSpace: 'nowrap' }}>
                                        <span style={{ paddingRight: '10px' }}>Learn more</span>
                                        <FaArrowAltCircleRight />
                                    </Link>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
    
                }    