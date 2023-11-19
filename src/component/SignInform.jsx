import { useContext, useRef } from "react";
import "../App.css";
import { PostContextList } from "../store/Post-store";

const SignInForm = () => {
  const userId = useRef();
  const postTitle = useRef();
  const postContent = useRef();
  const postReactions = useRef();
  const postHashtags = useRef();

  const { addPost } = useContext(PostContextList);
  const handelClick = (event) => {
    event.preventDefault();
    const userid = userId.current.value;
    const posttitle = postTitle.current.value;
    const postcontent = postContent.current.value;
    const postreactions = postReactions.current.value;
    const posthashtags = postHashtags.current.value.split(" ");

    (userId.current.value = ""),
      (postTitle.current.value = ""),
      (postContent.current.value = ""),
      (postReactions.current.value = ""),
      (postHashtags.current.value = "");
    addPost(userid, posttitle, postcontent, postreactions, posthashtags);
  };

  return (
    <form className="form-area" onSubmit={handelClick}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="000"
          ref={userId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How you are feeling today !!"
          ref={postTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Decriptions
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more .."
          ref={postContent}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          placeholder="Enter your reactions"
          ref={postReactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          HashTags
        </label>
        <input
          type="text"
          className="form-control"
          id="hashtags"
          placeholder="Enter tags sperating them with space!"
          ref={postHashtags}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SignInForm;
