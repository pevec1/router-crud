import Posts from "../components/Posts"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Home(){
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch("https://routercrudback.axareact.ru/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, []);
    return (
      <>
        <header className="header1">
          <Link to="/router-crud/posts/new">Create Post</Link>
          <div className="cross-icon">
            <div className="cross-icon-mark"></div>
          </div>
        </header>{" "}
        {data.map((post) => (
          <div key={post.id}>
            <Link to={`/router-crud/posts/${post.id}`}>
              <Posts
                id={post.id}
                content={post.content}
                created={post.created}
              />
            </Link>
          </div>
        ))}
      </>
    );
}