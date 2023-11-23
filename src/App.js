import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./Pages/layout";
import IndexPage from "./Pages/indexlayout";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import {UserContextProvider} from "./usercontext";
import CreatePost from "./Pages/createpost";
import PostPage from "./Pages/postpage";
import EditPost from "./Pages/Edit";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;