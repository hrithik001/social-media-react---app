import Post from "./Post";
import "../App.css";
import { useContext } from "react";
import { PostContextList } from "../store/Post-store";
import EmptyPage from "./EmptyPage";

const PostList = () => {
  const { postListcontent, addNewPosts } = useContext(PostContextList);

  const handelSubmit = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addNewPosts(data.posts);
      });
  };

  return (
    <>
      {postListcontent.length === 0 && (
        <EmptyPage handelSubmit={handelSubmit} />
      )}
      <div className="post-cards">
        {postListcontent.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
export default PostList;
