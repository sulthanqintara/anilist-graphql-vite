import React from "react";
import styled from "@emotion/styled";
import { IoClose, IoAdd } from "react-icons/io5";

const CircleButton = styled.button(({ isRounded }: { isRounded?: boolean }) => ({
  backgroundColor: "slateblue",
  width: isRounded ? "4rem" : "auto",
  height: isRounded ? "4rem" : "auto",
  borderRadius: isRounded ? "100%" : "4px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transitionDuration: "0.25s",
  ":active": { backgroundColor: "darkslateblue" },
  fontSize: isRounded ? "2rem" : "init",
  padding: isRounded ? "0" : "0.5rem 1rem",
  fontWeight: "600",
}));
const FixedDiv = styled.div({
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
      {isCheckActive && (
        <CircleButton onClick={onOpenModal}>
          <div>Add to Collection</div>
        </CircleButton>
      )}
      <CircleButton isRounded onClick={() => setIsCheckActive(!isCheckActive)}>
        {isCheckActive ? <IoClose /> : <IoAdd />}
      </CircleButton>
    </FixedDiv>
  );
};

export default FixedAddButton;
