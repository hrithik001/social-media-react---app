import { createContext, useContext, useReducer } from "react";

export const PostContextList = createContext({
  postListcontent: [],
  addPost: () => {},
  deletePost: () => {},
});

const reducerAction = (currentlist, action) => {
  let newPostList = currentlist;
  if (action.type === "DELETE") {
    newPostList = currentlist.filter((ele) => ele.id != action.payload.id);
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
    <PostContextList.Provider value={{ postListcontent, addPost, deletePost }}>
      {children}
    </PostContextList.Provider>
  );
};
const DEFAULT_POSTS = [
  {
    id: "1",
    userId: "user-001",
    postTitle: "enjoying the vaccation",
    postContent: "I'm enjoying my vacation with family and friends.",

    reactions: 12,
    hashTags: ["enjoying", "vaccations", "nature"],
  },
  {
    id: "2",
    userId: "user-002",
    postTitle: "Happy diwali",
    postContent: "I'm celebrating my diwali with my family,hope u too!!",

    reactions: 120,
    hashTags: ["enjoying", "celebration", "dipawali"],
  },
];
export default PostListProvider;
