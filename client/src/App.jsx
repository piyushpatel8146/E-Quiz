
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Quiz from "./Pages/Quiz/Quiz";
import Profile from "./Pages/Profile/Profile";
import Categories from "./Pages/Categories/Categories"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Categories" element={<Categories />} />
        
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}