import { useParams } from "react-router-dom";
import useAnime from "../../hooks/useAnime";
const Detail = () => {
  const { id } = useParams();
  const { data, loading, error } = useAnime(Number(id));
  console.log(data, loading, error);
  return <div>Detail</div>;
};

export default Detail;
