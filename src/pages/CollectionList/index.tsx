import React, { useEffect, useState } from "react";
import { CardContainer, SubmitButton } from "../Home/styles";
export const COLLECTIONS = "collections";
import { useNavigate } from "react-router-dom";
import {
  CenteredCard,
  CollectionCard,
  CollectionTitle,
  CollectionHeader,
  CoverImage,
  NoImage,
  CardButton,
  CardButtonContainer,
} from "./components";
import DeleteModal from "./DeleteModal";
import NewModal from "./NewModal";
import { IoHelp, IoTrash, IoPencil, IoEye } from "react-icons/io5";

const CollectionList = () => {
  const navigate = useNavigate();
  const collectionsString = localStorage.getItem(COLLECTIONS);
  const [collections, setCollections] = useState<Collection[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const onDeleteModalOpen = (idx: number) => {
    setIsDeleteModalOpen(true);
    setPosition(idx);
  };
  const onDeleteModalClose = () => setIsDeleteModalOpen(false);
  const onEditModalClose = () => setIsEditModalOpen(false);
  const onEditModalOpen = (idx: number) => {
    setIsEditModalOpen(true);
    setPosition(idx);
  };
  const onNewModalOpen = () => setIsNewModalOpen(true);
  const onNewModalClose = () => setIsNewModalOpen(false);

  const onCollectionDelete = () => {
    setPosition(0);
    const tempArr: Collection[] = [...collections];
    tempArr.splice(position, 1);
    setCollections(tempArr);
    localStorage.setItem(COLLECTIONS, JSON.stringify(tempArr));
    onDeleteModalClose();
  };
  useEffect(() => {
    if (collectionsString) setCollections(JSON.parse(collectionsString || "[]"));
  }, [collectionsString]);
  return (
    <>
      <CollectionHeader>
        <CollectionTitle>Collections</CollectionTitle>
        <SubmitButton onClick={onNewModalOpen}>Add a Collection</SubmitButton>
      </CollectionHeader>
      <CardContainer>
        {collections.length
          ? collections.map((collection, idx) => {
              const firstImage = collection.list.find((anime) => anime.coverImage.large);
              return (
                <CenteredCard key={collection.name}>
                  <CollectionCard
                    key={collection.name}
                    onClick={() => navigate(`${collection.name}`)}
                  >
                    <CardButtonContainer>
                      <CardButton
                        isDelete
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeleteModalOpen(idx);
                        }}
                      >
                        <IoTrash size={32} />
                      </CardButton>
                      <CardButton
                        onClick={(e) => {
                          e.stopPropagation();
                          onEditModalOpen(idx);
                        }}
                      >
                        <IoPencil size={32} />
                      </CardButton>
                      <CardButton
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`${collection.name}`);
                        }}
                      >
                        <IoEye size={32} />
                      </CardButton>
                    </CardButtonContainer>

                    <CollectionTitle>{collection.name}</CollectionTitle>
                    <div className="max-h-72 flex justify-center">
                      {firstImage ? (
                        <CoverImage src={firstImage.coverImage.large} alt="" />
                      ) : (
                        <NoImage>
                          <IoHelp size={120} color="rgba(0,0,0,0.5)" />
                        </NoImage>
                      )}
                    </div>
                    {collection.list.length ? <div>Anime list:</div> : "No data found"}
                    {collection.list.map((anime, idx) => {
                      if (idx === 3) return "...";
                      if (idx > 3) return null;
                      return (
                        <React.Fragment key={anime.id}>
                          <div>{anime.title.romaji}</div>
                        </React.Fragment>
                      );
                    })}
                  </CollectionCard>
                </CenteredCard>
              );
            })
          : "No Collection Found"}
      </CardContainer>
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        onCloseModal={onDeleteModalClose}
        onCollectionDelete={onCollectionDelete}
      />
      <NewModal
        collections={collections}
        isModalOpen={isNewModalOpen}
        setCollections={setCollections}
        onCloseModal={onNewModalClose}
      />
      <NewModal
        collections={collections}
        isModalOpen={isEditModalOpen}
        setCollections={setCollections}
        onCloseModal={onEditModalClose}
        position={position}
        editModal
      />
    </>
  );
};

export default CollectionList;
