import * as S from "./styles";

import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import Label from "../../atoms/Label";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";

const SnsButton = ({ snsType }) => {
  const kakaoOauthLogin = () => {
    const client_id = "ae445ce0b4254d726918cd93c69d199c";
    const redirect_uri = "http://localhost:3000/oauth/kakao";
    const response_type = "code";

    location.href = `https://kauth.kakao.com//oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`;
  };

  let icon;

  if (snsType === "Kakao") {
    icon = (
      <S.IconColumn>
        <RiKakaoTalkFill />
      </S.IconColumn>
    );
  } else if (snsType === "Naver") {
    icon = (
      <S.ImageColumn>
        <Image src="/sns/naver.png" />
      </S.ImageColumn>
    );
  } else if (snsType === "Google") {
    icon = (
      <S.IconColumn>
        <FcGoogle />
      </S.IconColumn>
    );
  }

  return (
    <S.Container snsType={snsType}>
      <Button handleOnClick={kakaoOauthLogin}>
        <S.ColumnWrapper>
          {icon}
          <S.LabelColumn>
            <Label styleType="Label" size="0.9">
              Login with {snsType}
            </Label>
          </S.LabelColumn>
        </S.ColumnWrapper>
      </Button>
    </S.Container>
  );
};

export default SnsButton;
