import { Route, Routes } from "react-router-dom";
import HeaderFooterLayout from "./components/HeaderFooterLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HeaderFooterLayout />}></Route>
    </Routes>
  );
}

export default App;
