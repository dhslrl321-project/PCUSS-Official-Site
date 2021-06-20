import * as S from "./style";

const Image = ({ src }) => {
  const props = {
    src,
  };

  return <S.Image {...props} />;
};

export default Image;
