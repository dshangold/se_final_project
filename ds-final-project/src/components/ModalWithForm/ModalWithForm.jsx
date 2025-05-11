import "./ModalWithForm.css";

function ModalWithForm({ title, name, children, onClose, onSubmit }) {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
