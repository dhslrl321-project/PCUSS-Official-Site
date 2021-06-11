import * as S from "./styles";

import SnsButton from "../../molecules/SnsButton";

const OAuthButtonGroup = () => {
  return (
    <S.Container>
      <SnsButton snsType="Kakao" />
      <SnsButton snsType="Naver" />
      <SnsButton snsType="Google" />
    </S.Container>
  );
};

export default OAuthButtonGroup;
