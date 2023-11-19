import Post from "./Post";
import "../App.css";
import { useContext } from "react";
import { PostContextList } from "../store/Post-store";
import EmptyPage from "./EmptyPage";

const PostList = () => {
  const { postListcontent } = useContext(PostContextList);
  if (postListcontent.length == 0) return <EmptyPage />;
  return (
    <div className="post-cards">
      {postListcontent.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
