import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionDetail from "./pages/CollectionList/Detail";
import Detail from "./pages/Detail";
import Header from "./components/layout/Header";
import BodyLayout from "./components/layout/Body";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<BodyLayout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/detail/:id" element={<Detail />} />
          <Route path="/collection">
            <Route index element={<CollectionDetail />} />
            <Route path="detail" element={<CollectionDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
