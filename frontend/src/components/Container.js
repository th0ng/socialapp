import React from 'react';
import Post from './Post';

const Container = ({ posts }) => {
  return (
    <div>
      {posts.map((e) => <Post user={e.user} content={e.post} />)}
    </div>

  );
}

export default Container;
