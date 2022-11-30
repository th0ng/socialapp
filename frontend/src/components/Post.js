import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Post = ({ post }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
      }}
    >
      <Typography>{post.user.username}</Typography>
      <Typography>{post.content}</Typography>
    </Box>
  )
}

export default Post;
