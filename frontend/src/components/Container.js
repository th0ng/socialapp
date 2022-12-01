import React from 'react';
import Box from "@mui/material/Box";
import Post from './Post';

const Container = ({ posts }) => {
  return (
    <Box>
      {posts.map((e) => <Post key={e._id} post={e} />)}
    </Box>

  );
}

export default Container;
