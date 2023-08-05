import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { COLLECTIONS } from "..";
import styled from "@emotion/styled";
import CenteredDiv from "../../../styles/CenteredDiv";
import { CardContainer, DeleteButtonContainer, SubmitButton } from "../../Home/styles";
import { CardDiv, CoverContain, DescDiv, TextContent } from "../../../components/card/components";
import { IoTrash } from "react-icons/io5";
import DeleteModal from "./DeleteModal";
import { CollectionHeader, CollectionTitle } from "../components";
import NewModal from "../NewModal";

const Title = styled.div({ fontSize: "1.5rem", fontWeight: "500" });

const CollectionDetail = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const collectionsString = localStorage.getItem(COLLECTIONS);
  const [collections, setCollections] = useState<Collection[]>([]);
  const collection = collections.find((item) => item.name === name);
  const collectionIndex = collections.findIndex((item) => item.name === name);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);
  const onDeleteModalOpen = () => setIsDeleteModalOpen(true);
  const onDeleteModalClose = () => setIsDeleteModalOpen(false);
  const onEditModalOpen = () => setIsEditModalOpen(true);
  const onEditModalClose = () => setIsEditModalOpen(false);

  const onAnimeDelete = () => {
    const arrSubmit = [...collections];
    arrSubmit[collectionIndex].list.splice(position, 1);
    setCollections(arrSubmit);
    localStorage.setItem(COLLECTIONS, JSON.stringify(arrSubmit));
    onDeleteModalClose();
  };

  useEffect(() => {
    if (collectionsString) setCollections(JSON.parse(collectionsString || "[]"));
  }, [collectionsString]);

  return (
    <>
      <CollectionHeader>
        <CollectionTitle>{collection?.name}</CollectionTitle>
        <SubmitButton onClick={onEditModalOpen}>Edit</SubmitButton>
      </CollectionHeader>
      <CenteredDiv>
        <CardContainer>
          {collection?.list.map((data, idx) => (
            <CardDiv onClick={() => navigate(`/detail/${data.id}`)} key={data.id}>
              <CoverContain src={data.coverImage.large} />
              <TextContent>
                <Title>{data.title.romaji || "-"}</Title>
                <DescDiv>{data.description}</DescDiv>
                <DeleteButtonContainer>
                  <SubmitButton
                    isDelete
                    className="mt-auto ml-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteModalOpen();
                      setPosition(idx);
                    }}
                  >
                    <IoTrash size={24} />
                  </SubmitButton>
                </DeleteButtonContainer>
              </TextContent>
            </CardDiv>
          ))}
        </CardContainer>
      </CenteredDiv>
      <DeleteModal
        isModalOpen={isDeleteModalOpen}
        onCloseModal={onDeleteModalClose}
        onCollectionDelete={onAnimeDelete}
      />
      <NewModal
        collections={collections}
        isModalOpen={isEditModalOpen}
        setCollections={setCollections}
        onCloseModal={onEditModalClose}
        position={position}
        editModal
        isDetail
      />
    </>
  );
};

export default CollectionDetail;
