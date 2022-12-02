import { Typography, Grid, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Post = ({ post }) => {
  return (
    <Box
      sx={{
        width: { lg: "65%", md: "75%", sm: "90%" },
        margin: '10px auto',
        padding: '10px',
        backgroundColor: '#E5D9B6',
        borderRadius: '5px'
      }}
    >

      {/* Header of the post */}
      <Grid container spacing={0.5}>
        <Grid item xs={6}>
          <Box sx={{ justifyContent: 'flex-start' }}>
            <Typography variant='h5' display='flex'>{post.user.username}</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography align='right'>{post.date.substring(0, 10)}</Typography>
        </Grid>
      </Grid>

      {/* Post content */}
      <Typography
        variant='h4'
        textAlign='left'
        sx={{
          marginTop: '10px'
        }}
      >
        {post.content}
      </Typography>

      {/* Likes number */}
      <Typography textAlign='left'>{post.likes} likes</Typography>

      {/* Like anh comment buttons */}
      <Grid container spacing={0.5} sx={{ marginTop: '10px' }}>
        <Grid item xs={6}>
          <Button
            sx={{
              width: '100%',
              backgroundColor: '#FFF'
            }}
          >Like</Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            sx={{
              width: '100%',
              backgroundColor: '#FFF'
            }}
          >Comment</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Post;
