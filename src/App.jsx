import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import SignInForm from "./component/SignInform";
import { useState } from "react";
import PostList from "./component/PostList";
import PostListProvider from "./store/Post-store";

const App = () => {
  const [selectedTab, setselectedtab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setselectedtab={setselectedtab} />
        <div className="content">
          <Header />

          {selectedTab === "Home" ? <PostList /> : <SignInForm />}

          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
};
export default App;
