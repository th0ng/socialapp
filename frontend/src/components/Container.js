import React from 'react';
import Box from "@mui/material/Box";
import Post from './Post';

const Container = ({ posts }) => {
  return (
    <Box sx={{ marginTop: '40px' }}>
      {posts.map((e) => <Post post={e} />)}
    </Box>

  );
}

export default Container;
