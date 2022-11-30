import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Post = ({ user, content }) => {
  return (
    <Box
      sx={{
        width: 600,
        backgroundColor: 'primary.dark'
      }}
    >
      <Typography>user.name</Typography>
      <Typography>post.content</Typography>
    </Box>
  )
}

export default Post;
