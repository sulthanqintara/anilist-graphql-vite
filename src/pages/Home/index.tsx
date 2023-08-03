import { useState } from "react";
import { useAnimes } from "../../hooks/useAnimes";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { data, error, loading } = useAnimes(page);
  console.log(data, error, loading);

  return <div>Home</div>;
};

export default Home;
