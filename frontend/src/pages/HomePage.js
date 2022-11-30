import React, { useState, useEffect } from 'react';
import postService from '../services/posts';
import loginService from '../services/login';
import { Login, Header, Container } from '../components';


const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const hook = () => {
    postService
      .getAll().then((allPosts) => setPosts(allPosts));
  }
  useEffect(hook, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      postService.setToken(user.token);
    }
  }, []);
  const handleLogin = async () => {
    try {
      const user = await loginService.login(JSON.stringify({ username, password }));

      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));

      postService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      window.localStorage.removeItem("loggedNoteappUser");

      postService.setToken(null);

      setUser(null);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  const Interface = () => {
    return (
      <>
        <Header handleLogout={handleLogout} />
        <Container posts={posts} />
      </>
    )
  };

  return (
    <div>
      {user === null
        ? <Login handleLogin={handleLogin} setUsername={setUsername} setPassword={setPassword} />
        : <Interface />}
    </div>
  )
}

export default HomePage;
