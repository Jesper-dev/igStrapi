import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./components/Post";
import axios from "axios";

//*This is our Mock Data (Hardcoded)
const MockPosts = {
  id: 1,
  description: "Me showing of my teams awesome note app Quire!",
  likes: 20,
  author: null,
  published_at: "2021-02-08T14:10:08.577Z",
  created_at: "2021-02-08T14:10:06.652Z",
  updated_at: "2021-02-08T14:10:08.610Z",
  image: [
    {
      id: 1,
      name: "quire_logo.JPG",
      alternativeText: "",
      caption: "",
      width: 240,
      height: 84,
      formats: null,
      hash: "quire_logo_8344eb9b77",
      ext: ".JPG",
      mime: "image/jpeg",
      size: 3.25,
      url: "/uploads/quire_logo_8344eb9b77.JPG",
      previewUrl: null,
      provider: "local",
      provider_metadata: null,
      created_at: "2021-02-08T14:09:14.477Z",
      updated_at: "2021-02-08T14:09:14.500Z",
    },
  ],
};

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //*This is how we can make a async func inside a useEffect
    const getPosts = async () => {
      await axios.get("http://localhost:1337/posts").then((res) => {
        setPosts(res.data);
        console.log(res.data);
      });
    };

    getPosts();
  }, []);

  return (
    <Main>
      <h1>IG - Strapi</h1>
      {posts.map((post, i) => (
        <Post
          key={i}
          image={`http://localhost:1337${post.image[0].url}`}
          desc={post.description}
          likes={post.likes}
          id={post.id}
        />
      ))}
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export default App;
