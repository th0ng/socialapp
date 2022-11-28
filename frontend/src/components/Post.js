import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Post = ({ user, post }) => {
  return (
    <Box>
      <Typography>user.name</Typography>
      <Typography>post.content</Typography>
    </Box>
  )
}

export default Post;
