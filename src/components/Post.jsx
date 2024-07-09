import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import "emoji-picker-element";
export default function Post() {
const params = useParams();

//console.log(params);   
    const [data, setData] = useState([]);

    useEffect(() => {
      setTimeout(() => {
      fetch("http://localhost:7070/posts/" + Number(params.id))
        .then((response) => response.json())
        .then((json) => setData(json));
    }, 1000);
      },[data])
    //console.log(data);
let {post} = data
let arr = Object.entries(data);

let arr2 = Object.entries(arr);
let content = arr2.map(
  ([key, value]) => Object.entries(value[1]).map(([key2, value2]) => value2)[1]
)[0];
let created = arr2.map(
  ([key, value]) => Object.entries(value[1]).map(([key2, value2]) => value2)[2]
)[0];
//console.log(arr2.map(([key, value]) => (Object.entries(value[1]).map(([key2, value2]) => (value2))[2]))[0]);
 
const handleDelete = () => {
  fetch("http://localhost:7070/posts/" + Number(params.id), {
    method: "DELETE",
  });
  window.location.href = "/router-crud/";
};



return (
    <main className="post">
      <div className="wrapper">
        <section className="create-post">
          <div className="post-header">
            <div className="profile-pic"></div>
            <div className="user-info">
              <div className="full-name">AXA</div>
              <div className="post-audience">
                <div className="friends-icon"></div>
                <span className="audience-text">Created: {created}</span>
                <div className="drop-down"></div>
              </div>
            </div>
          </div>
          <div className="post-content">
            <textarea
              name="post-desc"
              id="post-desc"
              cols="30"
              rows="5"
              placeholder={content}
            ></textarea>
            <div className="emoji-picker">
              <emoji-picker className="light"></emoji-picker>
              <i className="emoji" aria-label="Insert an emoji" role="img"></i>
            </div>
            <div className="add-to-your-post">
              <span className="add-to-post-text">Add to your post</span>
              <div className="add-to-post-icons">
                <div className="photo-video"></div>
                <div className="tag-people"></div>
                <div className="feeling-activity"></div>
                <div className="check-in"></div>
                <div className="gif"></div>
                <div className="live-video"></div>
              </div>
            </div>
            <button className="del-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </section>
        <section className="post-audience-section">
          <header className="post-audience-header">
            <div className="arrow-left-icon"></div>
            <h1>Post Audience</h1>
          </header>
          <div className="post-audience-content">
            <h4>Who can see your post?</h4>
            <p className="your-post-text">
              Your post will show up in Feed, on your profile and in search
              results.
            </p>
            <p>
              {" "}
              Your default audience is set to Only me, but you can change the
              <br /> audience of this specific post.
            </p>
          </div>
          <div className="post-audience-options">
            <div className="audience-option">
              <div className="audience-option-left">
                <div className="audience-option-icon earth"></div>
                <div className="audience-option-details">
                  <div className="audience-option-text">Public</div>
                  <span className="audience-option-desc">
                    Anyone on or off Facebook
                  </span>
                </div>
              </div>
              <div className="audience-option-right">
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="audience-option-radio"
                    className="audience-option-radio"
                  />
                </div>
              </div>
            </div>
            <div className="audience-option">
              <div className="audience-option-left">
                <div className="audience-option-icon user-group"></div>
                <div className="audience-option-details">
                  <div className="audience-option-text">Friends</div>
                  <span className="audience-option-desc">
                    Your friends on Facebook
                  </span>
                </div>
              </div>
              <div className="audience-option-right">
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="audience-option-radio"
                    className="audience-option-radio"
                  />
                </div>
              </div>
            </div>
            <div className="audience-option">
              <div className="audience-option-left">
                <div className="audience-option-icon user"></div>
                <div className="audience-option-details">
                  <div className="audience-option-text">Friends except...</div>
                  <span className="audience-option-desc">
                    Dont show to some friends
                  </span>
                </div>
              </div>
              <div className="audience-option-right">
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="audience-option-radio"
                    className="audience-option-radio"
                  />
                </div>
              </div>
            </div>
            <div className="audience-option">
              <div className="audience-option-left">
                <div className="audience-option-icon specific-user"></div>
                <div className="audience-option-details">
                  <div className="audience-option-text">Specific friends</div>
                  <span className="audience-option-desc">
                    Only show to some friends
                  </span>
                </div>
              </div>
              <div className="audience-option-right">
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="audience-option-radio"
                    className="audience-option-radio"
                  />
                </div>
              </div>
            </div>
            <div className="audience-option">
              <div className="audience-option-left">
                <div className="audience-option-icon lock"></div>
                <div className="audience-option-details">
                  <div className="audience-option-text">Only me</div>
                </div>
              </div>
              <div className="audience-option-right">
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="audience-option-radio"
                    className="audience-option-radio"
                  />
                </div>
              </div>
            </div>
            <div className="audience-option">
              <div className="audience-option-left">
                <div className="audience-option-icon gear"></div>
                <div className="audience-option-details">
                  <div className="audience-option-text">Custom</div>
                  <span className="audience-option-desc">
                    Include and exclude friends and lists
                  </span>
                </div>
              </div>
              <div className="audience-option-right">
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="audience-option-radio"
                    className="audience-option-radio"
                  />
                </div>
              </div>
            </div>
            <div className="audience-option">
              <div className="audience-option-left">
                <div className="audience-option-icon star"></div>
                <div className="audience-option-details">
                  <div className="audience-option-text">Close friends</div>
                  <span className="audience-option-desc">Your custom list</span>
                </div>
              </div>
              <div className="audience-option-right">
                <div className="radio-btn">
                  <input
                    type="radio"
                    name="audience-option-radio"
                    className="audience-option-radio"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
