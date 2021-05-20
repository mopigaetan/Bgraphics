import React from 'react';
import { Box,Typography } from '@material-ui/core';
import './PageHeader.scss'

const PageHeader = ({ imageUrl, text, children }) => {


  return (
    <Box id="header-image" minHeight='450px' style={{ backgroundImage: `url(${imageUrl})` }}>
      <Typography component='h3' className='header-title-custom'>{text}</Typography>
      {children}
    </Box>
  )
}
export default PageHeader;