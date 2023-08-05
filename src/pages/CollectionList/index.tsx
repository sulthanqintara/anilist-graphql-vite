import React from "react";
import { CardContainer } from "../Home/styles";
export const COLLECTIONS = "collections";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const CollectionTitle = styled.div({
  fontSize: "1.5rem",
  lineClamp: 2,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
});
const CollectionCard = styled.div({
  border: "1px solid black",
  borderRadius: "1rem",
  display: "flex",
  textAlign: "center",
  flexDirection: "column",
  height: "30rem",
  wordBreak: "break-word",
  padding: "1rem",
  width: "100%",
});
const CenteredCard = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CollectionList = () => {
  const navigate = useNavigate();
  const collectionsString = localStorage.getItem(COLLECTIONS);
  const collections: Collection[] = JSON.parse(collectionsString || "[]");
  return (
    <>
      <CollectionTitle>Collections</CollectionTitle>
      <CardContainer>
        {collections.length
          ? collections.map((collection) => {
              const firstImage = collection.list.find((anime) => anime.coverImage.large);
              return (
                <CenteredCard
                  key={collection.name}
                  onClick={() => navigate(`collection/${collection.name}`)}
                >
                  <CollectionCard key={collection.name}>
                    <CollectionTitle>{collection.name}</CollectionTitle>
                    <div className="max-h-72 flex justify-center">
                      {firstImage && (
                        <img
                          className="max-h-full max-w-full"
                          src={firstImage.coverImage.large}
                          alt=""
                        />
                      )}
                    </div>
                    {collection.list.length ? <div>Anime list:</div> : "No anime in collection"}
                    {collection.list.map((anime) => (
                      <React.Fragment key={anime.id}>
                        <div>{anime.title.romaji}</div>
                      </React.Fragment>
                    ))}
                  </CollectionCard>
                </CenteredCard>
              );
            })
          : "No Collection Found"}
      </CardContainer>
    </>
  );
};

export default CollectionList;
