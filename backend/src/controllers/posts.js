/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const postsRouter = require('express').Router();

const jwt = require('jsonwebtoken');
const Post = require('../models/post');
const { validate } = require('../models/user');
const User = require('../models/user');

const getTokenFrom = (request) => {
  const authorization = request.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

postsRouter.get('/', async (req, res) => {
  const posts = await Post.find({}).populate('user', { username: 1, name: 1 });
  res.json(posts);
});

postsRouter.get('/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => next(err));
});

postsRouter.post('/', async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const body = req.body;
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' });
  }
  const user = await User.findById(decodedToken.id);
  const post = new Post({
    content: body.content,
    date: new Date(),
    user: user._id,
    likes: 0,
    comment: [],
  });

  const savedPost = await post.save();

  user.posts = user.posts.concat(savedPost);
  await user.save();

  return res.json(savedPost);
});

// delete post
postsRouter.delete('/:id', (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => next(err));
});

// update post likes and comments
// eslint-disable-next-line consistent-return
postsRouter.patch('/:id', async (req, res, next) => {
  const error = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const originalPost = await Post.findById(req.params.id);
  if (!originalPost) return res.status(404).send('The post with given id was not found.');
  const query = { $set: {} };
  // eslint-disable-next-line no-restricted-syntax
  for (const key in req.body) {
    if (originalPost[key] && originalPost[key] !== req.body[key]) {
      query.$set[key] = req.body[key];
    }
  }
  const updatedPost = await Post.updateOne({ _id: req.params.id }, query);

  res.send(originalPost)
    .then(() => {
      res.status(204).end();
    }).catch((err) => next(err));
});

module.exports = postsRouter;
