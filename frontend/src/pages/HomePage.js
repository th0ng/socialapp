import React, {useState, useEffect} from 'react';
import postService from '../services/posts';
import loginService from '../services/login';

import HeaderNonUser from '../components/HeaderNonUser';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  
  const hook = () => {
    postService
      .getAll().then((allNotes) => setPosts(allNotes));
  }
  useEffect(hook, [posts])
  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      postService.setToken(user.token);
    }
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginService.login({ username, password });

      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));

      postService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async (e) => {
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
  return (
    <div>
      <HeaderNonUser />
    </div>
  )
}

export default HomePage;