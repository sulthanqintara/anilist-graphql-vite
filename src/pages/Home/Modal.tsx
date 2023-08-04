import ModalContainer from "../../components/ModalContainer";

interface Props {
  onCloseModal: () => void;
  isModalOpen: boolean;
}

const Modal: React.FC<Props> = ({ onCloseModal, isModalOpen }) => {
  // const collectionsString: [] = JSON.parse(localStorage.getItem("collections") ?? "[]");
  return (
    <ModalContainer onCloseModal={onCloseModal} isModalOpen={isModalOpen}>
      {/* {collectionsString.length ? (
        collectionsString.map((collection) => <div>collection</div>)
      ) : (
        <div>Add New Collection</div>
      )} */}
    </ModalContainer>
  );
};

export default Modal;
