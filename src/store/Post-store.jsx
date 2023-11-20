import { createContext, useReducer } from "react";

export const PostContextList = createContext({
  postListcontent: [],
  addPost: () => {},
  addNewPosts: () => {},
  deletePost: () => {},
});

const reducerAction = (currentlist, action) => {
  let newPostList = currentlist;
  if (action.type === "DELETE") {
    newPostList = currentlist.filter((ele) => ele.id != action.payload.id);
  } else if (action.type === "ADD_NEW_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD") {
    newPostList = [action.payload, ...newPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postListcontent, dispatchPostlist] = useReducer(reducerAction, []);

  const addPost = (
    userid,
    posttitle,
    postcontent,
    postreactions,
    posthashtags
  ) => {
    if (userid !== "" && posttitle !== "") {
      dispatchPostlist({
        type: "ADD",
        payload: {
          id: Date.now(),
          userId: userid,
          postTitle: posttitle,
          postContent: postcontent,
          reactions: postreactions,
          hashTags: posthashtags,
        },
      });
    } else {
      alert(`Fill the content for the post first`);
    }
  };

  const addNewPosts = (posts) => {
    console.log(posts);
    dispatchPostlist({
      type: "ADD_NEW_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostlist({
      type: "DELETE",
      payload: {
        id,
      },
    });
  };

  return (
    <PostContextList.Provider
      value={{ postListcontent, addPost, addNewPosts, deletePost }}
    >
      {children}
    </PostContextList.Provider>
  );
};

export default PostListProvider;
