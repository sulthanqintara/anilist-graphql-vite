import ModalContainer from "../../components/ModalContainer";
import styled from "@emotion/styled";
import { InputNewCollection, SubmitButton, SubmitContainer } from "../Home/styles";
import { useState } from "react";
import { COLLECTIONS } from ".";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
  setCollections: React.Dispatch<React.SetStateAction<Collection[]>>;
  collections: Collection[];
}

const NewModal: React.FC<Props> = ({ onCloseModal, isModalOpen, setCollections, collections }) => {
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
    const objSubmit: Collection = { name: newInput, list: [] };
    localStorage.setItem(COLLECTIONS, JSON.stringify([...collections, objSubmit]));
    setCollections([...collections, objSubmit]);
    onCloseModal();
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setNewInput(e.target.value);

  return (
    <ModalContainer onCloseModal={onCloseModal} isModalOpen={isModalOpen} small>
      <Title>Add New Collection</Title>
      <form onSubmit={onAddCollection}>
        <InputNewCollection type="text" fullWidth onChange={onInputChange} autoFocus />
      </form>
      <SubmitContainer>
        <SubmitButton isDelete onClick={onCloseModal}>
          Cancel
        </SubmitButton>
        <SubmitButton onClick={onAddCollection}>Add</SubmitButton>
      </SubmitContainer>
    </ModalContainer>
  );
};

export default NewModal;
