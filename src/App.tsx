import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import CollectionDetail from "./pages/CollectionList/Detail";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="detail">Detail</NavLink>
        <NavLink to="collection">Collection</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection">
          <Route index element={<CollectionDetail />} />
          <Route path="/detail" element={<CollectionDetail />} />
        </Route>
        <Route path="" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
