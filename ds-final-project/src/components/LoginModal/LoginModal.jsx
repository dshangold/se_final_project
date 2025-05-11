import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <ModalWithForm
      title="Log In"
      name="login"
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label className="modal__label">
        Email:
        <input type="email" name="email" className="modal__input" required />
      </label>
      <label className="modal__label">
        Password:
        <input
          type="password"
          name="password"
          className="modal__input"
          required
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
