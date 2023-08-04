import Modal from "react-modal";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
  children: React.ReactNode;
}

const ModalContainer: React.FC<Props> = ({ isModalOpen, children, onCloseModal }) => {
  Modal.setAppElement("#root");
  return (
    <Modal
      style={{
        content: {
          position: "initial",
          border: "1px solid #ccc",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          padding: "20px",
          minWidth: "50vw",
          maxHeight: "80vh",
        },
        overlay: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          inset: 0,
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
