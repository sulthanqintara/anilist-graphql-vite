import { useEffect, useState } from "react";
import ModalContainer from "../../components/ModalContainer";
import styled from "@emotion/styled";
import { InputNewCollection, SubmitButton, SubmitContainer } from "../Home/styles";
import { COLLECTIONS } from ".";
import { useNavigate } from "react-router-dom";
import hasSpecialCharacters from "../../helper/hasSpecialCharacters";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
  setCollections: React.Dispatch<React.SetStateAction<Collection[]>>;
  collections: Collection[];
  editModal?: boolean;
  position?: number;
  isDetail?: boolean;
}

const NewModal: React.FC<Props> = ({
  onCloseModal,
  isModalOpen,
  setCollections,
  collections,
  editModal,
  position,
  isDetail,
}) => {
  const navigate = useNavigate();
  const [newInput, setNewInput] = useState<string>("");
  const Title = styled.h1({
    fontSize: "1.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  });
  const onAddCollection = () => {
    if (collections.find((collection) => collection.name === newInput)) {
      return window.alert("Collection name already exist");
    }
    if (hasSpecialCharacters(newInput)) {
      return window.alert("Collection name cannot contain special characters");
    }
    const objSubmit: Collection = { name: newInput, list: [] };
    localStorage.setItem(COLLECTIONS, JSON.stringify([...collections, objSubmit]));
    setCollections([...collections, objSubmit]);
    onCloseModal();
  };
  const onEditCollection = () => {
    const arrSubmit = [...collections];
    if (hasSpecialCharacters(newInput)) {
      return window.alert("Collection name cannot contain special characters");
    }
    if (collections.find((collection) => collection.name === newInput)) {
      return window.alert("Collection name already exist");
    }
    if (typeof position === "number") {
      arrSubmit[position] = { name: newInput, list: arrSubmit[position].list };
    }
    localStorage.setItem(COLLECTIONS, JSON.stringify(arrSubmit));
    setCollections(arrSubmit);
    if (isDetail) {
      navigate(`/collection/${newInput}`);
    }
    onCloseModal();
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewInput(e.target.value);
  useEffect(() => {
    if (typeof position === "number" && editModal && collections.length)
      setNewInput(collections[position].name);
  }, [collections, editModal, position]);

  return (
    <ModalContainer onCloseModal={onCloseModal} isModalOpen={isModalOpen} small>
      <Title>{editModal ? "Edit Collection Name" : "Add a Collection"}</Title>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (editModal) return onEditCollection();
          return onAddCollection();
        }}
      >
        <InputNewCollection
          type="text"
          fullWidth
          onChange={onInputChange}
          autoFocus
          value={newInput}
        />
      </form>
      <SubmitContainer>
        <SubmitButton isDelete onClick={onCloseModal}>
          Cancel
        </SubmitButton>
        <SubmitButton type="button" onClick={editModal ? onEditCollection : onAddCollection}>
          {editModal ? "Edit" : "Add"}
        </SubmitButton>
      </SubmitContainer>
    </ModalContainer>
  );
};

export default NewModal;
