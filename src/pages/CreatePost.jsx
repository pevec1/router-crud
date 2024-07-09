import "../App.css";
import "emoji-picker-element";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function СreatePost() {
  const [state, setStates] = useState([]);

  const [update, setUpdate] = useState();

  const handleChange = (event) => {
    console.log(event);
    setUpdate({ ...update, "id": 0,[event.target.name]: event.target.value });
    console.log("value:", update);
  };
  const saveData =() =>{
    console.log(update);
    fetch("https://routercrudback.axareact.ru/posts", {
      method: "POST",
      body: JSON.stringify(update),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.data;
        console.log("response.status: ", res); // 👉️ 200
        if (res.status === 204) {
          window.location.href = "/router-crud/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
       
  }
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(state, event, update);
    setStates(state);
    saveData();
  }
  
  useEffect(() => {
    
  }, [update,state]);
    
  
  return (
    <main className="post">
      <div className="wrapper">
        <section className="create-post">
          <header className="header">
            <h1>Create post</h1>
            <div className="cross-icon">
              <div className="cross-icon-mark"></div>
            </div>
          </header>
          <div className="post-header">
            <div className="profile-pic"></div>
            <div className="user-info">
              <div className="full-name">AXA</div>
              <div className="post-audience">
                <div className="friends-icon"></div>
                <span className="audience-text">Friends</span>
                <div className="drop-down"></div>
              </div>
            </div>
            <div>
              <Link to="/router-crud/">X</Link>
            </div>
          </div>

          <div className="post-content">
            <form method="post" onSubmit={onSubmit}>
              <label>
                Edit your post:
                <textarea
                  name="content"
                  id="post-desc"
                  defaultValue="Write something..."
                  onChange={handleChange}
                  rows={5}
                  cols={30}
                />
              </label>
              <div className="emoji-picker">
                <emoji-picker className="light"></emoji-picker>
                <i
                  className="emoji"
                  aria-label="Insert an emoji"
                  role="img"
                ></i>
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
              <button className="post-btn" type="submit">
                Post
              </button>
            </form>
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