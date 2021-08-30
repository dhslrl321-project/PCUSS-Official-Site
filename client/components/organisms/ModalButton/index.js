import * as S from "./styles";

const ModalButton = ({ children }) => {
  return (
    <S.Container>
      <S.Span>{children}</S.Span>
    </S.Container>
  );
};

export default ModalButton;
