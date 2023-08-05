import ModalContainer from "../../components/ModalContainer";
import styled from "@emotion/styled";
import { SubmitButton, SubmitContainer } from "../Home/styles";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
  onCollectionDelete: () => void;
}

const DeleteModal: React.FC<Props> = ({ onCloseModal, isModalOpen, onCollectionDelete }) => {
  const Title = styled.h1({
    fontSize: "1.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  });
  return (
    <ModalContainer onCloseModal={onCloseModal} isModalOpen={isModalOpen} small>
      <Title>Are you sure you want to delete this collection?</Title>
      <SubmitContainer centered>
        <SubmitButton isDelete onClick={onCollectionDelete}>
          Delete
        </SubmitButton>
        <SubmitButton onClick={onCloseModal}>Cancel</SubmitButton>
      </SubmitContainer>
    </ModalContainer>
  );
};

export default DeleteModal;
