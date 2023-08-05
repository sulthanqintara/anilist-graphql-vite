import { useEffect, useState } from "react";
import useAnimes from "../../hooks/useAnimes";
import Card from "../../components/card";
import Pagination from "../../components/pagination";
import CenteredDiv from "../../styles/CenteredDiv";
import PuffLoader from "react-spinners/PuffLoader";
import { ApolloError } from "@apollo/client";
import FixedAddButton from "../../components/button/FixedAddButton";
import Modal from "./Modal";
import { CardContainer } from "./styles";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isCheckActive, setIsCheckActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean[]>([]);
  const {
    data,
    error,
    loading,
  }: { data: Datas; loading: boolean; error: ApolloError | undefined } = useAnimes(page);
  useEffect(() => {
    if (data) {
      setTotalPage(data.Page.pageInfo.lastPage);
      setSelected(new Array(data.Page.media.length).fill(false));
    }
  }, [data]);

  const animeData = data?.Page.media as Anime[];
  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(Number(e.target.value));
  };
  const onOpenModal = () => {
    if (!selected.find((element) => element))
      return window.alert("Select at least one anime to be added to the collection");
    setIsModalOpen(true);
  };
  const onCloseModal = () => setIsModalOpen(false);
  const onChange = (position: number) =>
    setSelected(selected.map((item, index) => (index === position ? !item : item)));
  const selectedAnimeData = () => {
    if (data) {
      const trueData = animeData.filter((_, idx) => selected[idx]);
      return trueData;
    }
    return [];
  };

  return (
    <>
      {loading && (
        <CenteredDiv>
          <PuffLoader color="slateblue" />
        </CenteredDiv>
      )}
      {error && "Something went wrong :("}
      <CardContainer>
        {animeData?.map((anime, idx) => (
          <Card
            data={anime}
            isCheckActive={isCheckActive}
            key={anime.id}
            onChange={onChange}
            checked={selected[idx]}
            position={idx}
          />
        ))}
      </CardContainer>
      <Pagination page={page} totalPage={totalPage} onChange={handlePageChange} />
      <FixedAddButton
        onOpenModal={onOpenModal}
        setIsCheckActive={setIsCheckActive}
        isCheckActive={isCheckActive}
      />
      <Modal
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
        selectedAnimeData={selectedAnimeData}
      />
    </>
  );
};

export default Home;
