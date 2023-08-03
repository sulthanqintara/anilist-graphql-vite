import { useEffect, useState } from "react";
import { useAnimes } from "../../hooks/useAnimes";
import Card from "../../components/card";
import styled from "@emotion/styled";
import mq from "../../styles/mediaQuery";
import Pagination from "../../components/pagination";
import CenteredDiv from "../../styles/CenteredDiv";
import PuffLoader from "react-spinners/PuffLoader";
import { ApolloError } from "@apollo/client";
import FixedAddButton from "../../components/button/FixedAddButton";

export interface Anime {
  __typename: string;
  id: number;
  title: {
    __typename: string;
    romaji: string;
    english: string;
    native: string;
  };
  description: string;
  coverImage: {
    __typename: string;
    large: string;
  };
}
interface PageInfo {
  __typename: string;
  total: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}
interface Datas {
  Page: {
    media: Anime[];
    pageInfo: PageInfo;
  };
}

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [isCheckActive, setIsCheckActive] = useState<boolean>(false);
  const {
    data,
    error,
    loading,
  }: { data: Datas; loading: boolean; error: ApolloError | undefined } = useAnimes(page);
  useEffect(() => {
    if (data) setTotalPage(data.Page.pageInfo.lastPage);
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
  return (
    <div>
      {loading && (
        <CenteredDiv>
          <PuffLoader color="slateblue" />
        </CenteredDiv>
      )}
      {error && "Something went wrong :("}
      <CardContainer>
        {animeData?.map((anime) => (
          <Card data={anime} isCheckActive={isCheckActive} key={anime.id} />
        ))}
      </CardContainer>
      <CenteredDiv>
        <Pagination page={page} totalPage={totalPage} handlePageClick={handlePageClick} />
      </CenteredDiv>
      <FixedAddButton setIsCheckActive={setIsCheckActive} isCheckActive={isCheckActive} />
    </div>
  );
};

export default Home;
