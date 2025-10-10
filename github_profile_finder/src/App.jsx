import React, { useEffect, useState } from "react";
import GithubProfileUI from "./components/GithubProfileUi";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getUserInfo = async (username) => {
    setLoading(true);
    try {
      setError(""); // clear previous error
      setUser(null);
      setRepos([]);

      const responseUser = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(responseUser.data);

      const responseRepo = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );
      setRepos(responseRepo.data.slice(0, 20));
    } catch (error) {
      setError("User not found");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key !== "Enter" || search.trim() === "") return;
    getUserInfo(search);
    setSearch("");
  };

  const userBySearch = (username) => {
    if (!username.trim()) return;
    getUserInfo(username);
    setSearch("");
  };

  return (
    <>
      <GithubProfileUI
        user={user}
        repos={repos}
        search={search}
        setSearch={setSearch}
        onKeyDown={onKeyDown}
        error={error}
        loading={loading}
        userBySearch={userBySearch}
      />
    </>
  );
};

export default App;
