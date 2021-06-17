import * as S from "./styles";

const Button = ({ handleOnClick, children }) => {
  return <S.Container onClick={handleOnClick}>{children}</S.Container>;
};

export default Button;
