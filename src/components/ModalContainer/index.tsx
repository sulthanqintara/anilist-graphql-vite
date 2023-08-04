import { useEffect, useRef } from "react";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
  children: React.ReactNode;
}

const ModalContainer: React.FC<Props> = ({ isModalOpen, children, onCloseModal }) => {
  const dialogRef: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);
  useEffect(() => {
    if (!dialogRef.current) return;
    if (isModalOpen) {
      return dialogRef.current.showModal();
    }
    dialogRef.current.close();
  }, [isModalOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => {
        if (dialogRef.current) {
          const dialogDimensions = dialogRef.current.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            dialogRef?.current?.close();
            onCloseModal();
          }
        }
      }}
    >
      {children}
    </dialog>
  );
};

export default ModalContainer;
