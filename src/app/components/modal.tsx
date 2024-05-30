// in the modal component, we have a modal box that is displayed when the modalOpen prop is true.
interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}

// export the Modal component
const Modal: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children }) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className='modal-box relative'>
        <label
          onClick={() => setModalOpen(false)}
          className='btn btn-sm btn-circle absolute right-2 top-2'
        >
          ✕
        </label>
        {children}
      </div>
    </div>
  );
};

export default Modal;