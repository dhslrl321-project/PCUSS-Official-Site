import * as S from "./styles";

import Button from "../../atoms/Button";

const Modal = ({ children }) => {
  return (
    <S.Container>
      <S.Span>{children}</S.Span>
    </S.Container>
  );
};

export default Modal;
