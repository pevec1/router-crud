import { Link } from "react-router-dom";
import Post from "../components/Post"
import { useState, useEffect } from "react";
export default function Home(){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("http://localhost:7070/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
    return (
      <>
      <Link to="/router-crud/posts/new">Create Post</Link>
        {data.map((post) => (
          <Post
            key={post.id}
            content={post.content}
            created={post.created}
          />
        ))}
      </>
    );
}