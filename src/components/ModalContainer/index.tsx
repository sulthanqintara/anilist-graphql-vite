import Modal from "react-modal";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
  children: React.ReactNode;
  small?: boolean;
}

const ModalContainer: React.FC<Props> = ({ isModalOpen, children, onCloseModal, small }) => {
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
          minWidth: small ? "20vw" : "50vw",
          maxHeight: "80vh",
          maxWidth: "90vw",
        },
        overlay: {
          zIndex: 1000,
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
