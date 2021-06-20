import * as S from "./styles";

import OAuthButtonGroup from "../../organisms/OAuthButtonGroup";
import SectionHeader from "../../organisms/SectionHeader";

const OAuth = ({ styleType }) => {
  let title;
  let description;

  if (styleType === "SignIn") {
    title = "로그인";
    description =
      "사용자들의 개인 정보를 위해 SNS 인증을 통한 로그인만 제공합니다.";
  } else if (styleType === "SignUp") {
    title = "회원 가입";
    description = "7초만에 회원가입을 마치고 모의 해킹 문제를 풀러 가봅시다!";
  }

  return (
    <S.Container>
      <SectionHeader title={title} description={description} />
      <OAuthButtonGroup />
    </S.Container>
  );
};

export default OAuth;
