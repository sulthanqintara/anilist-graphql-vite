import { useEffect, useState } from "react";
import useAnimes from "../../hooks/useAnimes";
import Card from "../../components/card";
import styled from "@emotion/styled";
import mq from "../../styles/mediaQuery";
import Pagination from "../../components/pagination";
import CenteredDiv from "../../styles/CenteredDiv";
import PuffLoader from "react-spinners/PuffLoader";
import { ApolloError } from "@apollo/client";
import FixedAddButton from "../../components/button/FixedAddButton";
import Modal from "./Modal";

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
  const CardContainer = styled.div({
    display: "grid",
    gridTemplateColumns: "auto",
    gap: "1rem",
    [mq[2]]: { gridTemplateColumns: "auto auto" },
    [mq[3]]: { gridTemplateColumns: "auto auto auto" },
  });
  const handlePageClick = (e: { selected: number }) => setPage(e.selected + 1);
  const onOpenModal = () => {
    if (!selected.find((element) => element))
      return window.alert("Select at least one anime to be added to the collection");
    setIsModalOpen(true);
  };
  const onCloseModal = () => setIsModalOpen(false);
  const onChange = (position: number) =>
    setSelected(selected.map((item, index) => (index === position ? !item : item)));

  return (
    <div>
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
      <CenteredDiv>
        <Pagination page={page} totalPage={totalPage} handlePageClick={handlePageClick} />
      </CenteredDiv>
      <FixedAddButton
        onOpenModal={onOpenModal}
        setIsCheckActive={setIsCheckActive}
        isCheckActive={isCheckActive}
      />
      <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
    </div>
  );
};

export default Home;
