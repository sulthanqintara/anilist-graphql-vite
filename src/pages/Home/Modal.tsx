import { useEffect, useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import styled from "@emotion/styled";
import { IoAdd, IoCheckmark } from "react-icons/io5";
import {
  CollectionDiv,
  CollectionListModal,
  CollectionButton,
  CollectionTitle,
  InputNewCollection,
  SubmitButton,
  FlexEnd,
} from "./styles";
import isEqual from "lodash.isequal";
import { COLLECTIONS } from "../CollectionList";
interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
  selectedAnimeData: () => Anime[];
}

const Modal: React.FC<Props> = ({ onCloseModal, isModalOpen, selectedAnimeData }) => {
  const collectionsString = localStorage.getItem(COLLECTIONS);
  const collections: Collection[] = JSON.parse(collectionsString || "[]");
  const [selectedCollections, setSelectedCollections] = useState<boolean[]>([]);
  const [isAddNewClicked, setIsAddNewClicked] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>("");
  const ModalTitle = styled.h1({
    fontSize: "1.5rem",
    borderBottom: "1px solid black",
    paddingBottom: "1rem",
    borderRadius: "4px",
  });
  const onAddNewClicked = () => {
    setIsAddNewClicked(!isAddNewClicked);
  };

  const onAddNewCollection = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!newText) {
      return window.alert("Collection can't be empty");
    }
    if (collections.find((e) => e.name === newText)) {
      return window.alert("Collection name must be unique");
    }
    const collectionArr: Collection[] = [...collections, { name: newText }];
    localStorage.setItem(COLLECTIONS, JSON.stringify(collectionArr));
    setNewText("");
    setIsAddNewClicked(false);
  };
  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewText(e.target.value);
  useEffect(() => {
    if (collectionsString)
      setSelectedCollections(new Array(JSON.parse(collectionsString).length).fill(false));
  }, [collectionsString]);
  const onCollectionClicked = (position: number) => {
    return setSelectedCollections(
      selectedCollections.map((item, index) => (index === position ? !item : item))
    );
  };
  const selectedCollectionsData = () => {
    if (collections.length) {
      const selectedData = collections.filter((_, idx) => selectedCollections[idx]);
      return selectedData;
    }
    return [];
  };
  const onSubmit = () => {
    const arrSubmit: Collection[] = collections.map((collection, idx) => {
      const list: CollectionAnimeDetail[] = collection.list ?? [];
      selectedAnimeData().map((anime) => {
        if (!list.find((item) => item.id === anime.id)) list.push(anime);
      });
      return selectedCollections[idx]
        ? {
            name: collection.name,
            list,
          }
        : collection;
    });
    console.log(selectedAnimeData(), arrSubmit, collections);
    if (isEqual(arrSubmit, collections))
      return window.alert("Anime already existed on that collection");
    localStorage.setItem(COLLECTIONS, JSON.stringify(arrSubmit));
    window.alert("Anime has been added to the collection");
  };

  return (
    <ModalContainer onCloseModal={onCloseModal} isModalOpen={isModalOpen}>
      <ModalTitle>Select Collection</ModalTitle>
      <br />
      <CollectionListModal>
        <CollectionDiv>
          <CollectionButton onClick={() => (newText ? onAddNewCollection() : onAddNewClicked())}>
            <IoAdd size={32} />
          </CollectionButton>
          {!isAddNewClicked ? (
            <CollectionTitle>Add new Collection</CollectionTitle>
          ) : (
            <form onSubmit={onAddNewCollection}>
              <InputNewCollection onChange={onTextChange} type="text" autoFocus />
            </form>
          )}
        </CollectionDiv>
        {collections.length
          ? collections.map((collection, idx) => (
              <CollectionDiv key={collection.name}>
                <CollectionButton onClick={() => onCollectionClicked(idx)}>
                  {selectedCollections[idx] ? (
                    <IoCheckmark size={32} />
                  ) : (
                    <IoAdd size={32} css={{ display: "flex" }} />
                  )}
                </CollectionButton>
                <CollectionTitle>{collection.name}</CollectionTitle>
              </CollectionDiv>
            ))
          : null}
      </CollectionListModal>
      <FlexEnd>
        <SubmitButton disabled={!selectedCollectionsData().length} onClick={onSubmit}>
          Add to Collection
        </SubmitButton>
      </FlexEnd>
    </ModalContainer>
  );
};

export default Modal;
