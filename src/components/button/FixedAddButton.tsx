import React from "react";
import styled from "@emotion/styled";
import { IoClose, IoAdd } from "react-icons/io5";
import AddToCollection from "./AddToCollection";

const CircleButton = styled.button({
  backgroundColor: "slateblue",
  width: "4rem",
  height: "4rem",
  borderRadius: "100%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transitionDuration: "0.25s",
  ":active": { backgroundColor: "darkslateblue" },
  fontSize: "2rem",
  fontWeight: "600",
});
export const FixedDiv = styled.div({
  display: "flex",
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  gap: "16px",
  alignItems: "center",
});
interface Props {
  setIsCheckActive: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckActive: boolean;
  onOpenModal: () => void;
}

const FixedAddButton: React.FC<Props> = ({ setIsCheckActive, isCheckActive, onOpenModal }) => {
  return (
    <FixedDiv>
      {isCheckActive && <AddToCollection onOpenModal={onOpenModal} />}
      <CircleButton onClick={() => setIsCheckActive(!isCheckActive)}>
        {isCheckActive ? <IoClose /> : <IoAdd />}
      </CircleButton>
    </FixedDiv>
  );
};

export default FixedAddButton;
