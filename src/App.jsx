import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharedLayouts from "./pages/SharedLayouts";
import NavBar from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import SinglePostPage from "./pages/SinglePostPage";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreatePost />} />
            <Route path="/post/:id" element={<SinglePostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
