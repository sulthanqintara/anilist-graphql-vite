import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAnime from "../../hooks/useAnime";
import { ApolloError } from "@apollo/client";
import styled from "@emotion/styled";
import CenteredDiv from "../../styles/CenteredDiv";
import { PuffLoader } from "react-spinners";
import defaultAnimeData from "./anime.json";
import { IoStarOutline } from "react-icons/io5";
import { COLLECTIONS } from "../CollectionList";
import mq from "../../styles/mediaQuery";
import Modal from "../Home/Modal";
import AddToCollection from "../../components/button/AddToCollection";
import { FixedDiv } from "../../components/button/FixedAddButton";

const AnimeContainer = styled.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  textAlign: "center",
  position: "relative",
});
const AnimeTitle = styled.div(({ big }: { big?: boolean }) => ({
  fontSize: big ? "1.25rem" : "1rem",
  color: big ? "black" : "gray",
  fontWeight: 600,
}));
const AnimeCover = styled.img(() => ({
  width: "250px",
  height: "auto",
  marginBottom: "1rem",
  [mq[1]]: {
    width: "400px",
  },
}));
const ScoreContainer = styled.div({ display: "flex", alignItems: "center" });
const CharacterContainer = styled.div({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  width: "100%",
  gap: "12px",
});
const CharacterCard = styled.div(({ src }: { src: string }) => ({
  backgroundImage: `url(${src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "230px",
  height: "360px",
}));
const CharacterName = styled.div({
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  fontWeight: "600",
});

const Detail = () => {
  const { id } = useParams();
  const {
    data,
    loading,
    error,
  }: { data: AnimeDetail | undefined; loading: boolean; error: ApolloError | undefined } = useAnime(
    Number(id)
  );
  const {
    title,
    description,
    averageScore,
    characters,
    coverImage,
    duration,
    episodes,
    format,
    genres,
    endDate,
    season,
    startDate,
    type,
  } = data?.Media ?? defaultAnimeData;
  const collectionsString = localStorage.getItem(COLLECTIONS);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  React.useEffect(() => {
    if (collectionsString) setCollections(JSON.parse(collectionsString || "[]"));
  }, [collectionsString]);
  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);
  const aniCollectionData = () => {
    return [{ coverImage, description, id: Number(id), title }];
  };

  return (
    <AnimeContainer>
      {loading ? (
        <CenteredDiv>
          <PuffLoader color="slateblue" />
        </CenteredDiv>
      ) : (
        <>
          <AnimeTitle big>{title.english}</AnimeTitle>
          <AnimeTitle>{title.romaji}</AnimeTitle>
          <AnimeTitle>{title.native}</AnimeTitle>
          <AnimeCover src={coverImage.large}></AnimeCover>
          <ScoreContainer>
            Rating : <IoStarOutline size={20} /> {averageScore / 10}
          </ScoreContainer>
          <div>
            {type} {format} ({episodes} Episodes: {duration} minutes per episode)
          </div>
          <div>
            Premiered on {season.charAt(0).toUpperCase()}
            {season.slice(1).toLowerCase()} {startDate.year}
          </div>
          <div>
            Aired on {new Date(startDate.year, startDate.month - 1, startDate.day).toDateString()}{" "}
            to {new Date(endDate.year, endDate.month - 1, endDate.day).toDateString()}
          </div>
          <div>
            Genres: {genres.map((genre, idx) => (genres.length !== idx + 1 ? genre + ", " : genre))}
          </div>

          <AnimeTitle big>On Collection</AnimeTitle>
          <ul>
            {collections.map((collection) => {
              const existArr: Collection[] = [];
              collection.list.find((anime) => anime.id === Number(id)) && existArr.push(collection);
              return existArr.map((collection) => <li key={collection.name}>{collection.name}</li>);
            })}
          </ul>

          <AnimeTitle big>Characters</AnimeTitle>
          <CharacterContainer>
            {characters.nodes.map((character) => {
              console.log(character.id, characters);
              return (
                <CharacterCard src={character.image.large} key={character.id}>
                  <CharacterName>{character.name.full}</CharacterName>
                </CharacterCard>
              );
            })}
          </CharacterContainer>
          <AnimeTitle big>Description</AnimeTitle>
          <div>{description}</div>
          <FixedDiv>
            <AddToCollection onOpenModal={onOpenModal} />
          </FixedDiv>
        </>
      )}
      {error && "Something went wrong :("}

      <Modal
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
        selectedAnimeData={aniCollectionData}
      />
    </AnimeContainer>
  );
};

export default Detail;
