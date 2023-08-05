import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollectionDetail from "./pages/CollectionList/Detail";
import Detail from "./pages/Detail";
import Header from "./components/layout/Header";
import BodyLayout from "./components/layout/Body";
import CollectionList from "./pages/CollectionList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<BodyLayout />}>
          <Route path="/" element={<Home />} />
          <Route index path="/detail/:id" element={<Detail />} />
          <Route path="/collection">
            <Route index element={<CollectionList />} />
            <Route path=":name" element={<CollectionDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
