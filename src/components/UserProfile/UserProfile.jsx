import { Avatar, Paper } from '@mui/material'
import React from 'react'


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
}

function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: name.split(' ').length > 1 ? `${name.split(' ')[0][0]}${name.split(' ')[1][0]}` : `${name.split(' ')[0][0]}`,
    };
}

function UserProfile({userName, userAvatar}) {
    
  return (
    <Paper
    style={{
        position:"fixed",
        top:"13vh",
        right:"2vw",
        padding:"1vw",
        display:"flex",
        gap:"1vw",
        borderRadius:"10px",
    }}
    elevation={3}
    >
        <div
            style={{
                height: '5vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            {userName}
        </div>
        {userAvatar ? <Avatar src={userAvatar}>UI</Avatar> : <Avatar {...stringAvatar(userName)} />}
    </Paper>
  )
}

export default UserProfile