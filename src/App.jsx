import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Book from "./pages/book/book";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/book" element={<Book />} />
    </Routes>
  );
}

export default App;
