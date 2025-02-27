import { Route, Routes } from "react-router-dom";
import HeaderFooterLayout from "./components/HeaderFooterLayout";
import ChatPage from "./pages/chat";
import Login from "./pages/loginSignup/Login";
import Signup from "./pages/loginSignup/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooterLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<ChatPage />} />
      </Route>
    </Routes>
  );
}

export default App;
