import * as S from "./styles";

const Modal = ({ showModal }) => {
  return <S.Container>{showModal ? <div>Modal</div> : null}</S.Container>;
};

export default Modal;
