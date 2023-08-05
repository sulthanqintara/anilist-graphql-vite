import React from "react";
import { SubmitButton } from "../../pages/Home/styles";

interface Props {
  onOpenModal: () => void;
}

const AddToCollection: React.FC<Props> = ({ onOpenModal }) => {
  return (
    <SubmitButton onClick={onOpenModal}>
      <div>Add to Collection</div>
    </SubmitButton>
  );
};

export default AddToCollection;
