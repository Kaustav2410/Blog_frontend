import Post from "../components/post";
import {useEffect, useState} from "react";

export default function IndexLayout() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts.posts);
        // console.log(posts.posts.length);
      });
    });
  }, []);
  let data=posts.length;
//   console.log(data);
  return (
    <>
      {data>0 && Object.values(posts).map((ele) => (
        <Post {...ele} />
      ))}
    </>
  );
}