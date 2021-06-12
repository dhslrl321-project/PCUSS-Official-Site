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

    location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`;
  };

  const naverOauthLogin = () => {
    const client_id = "zxs_Uxd9VYn17b9Aa9oW";
    const redirect_uri = "http://localhost:3000/oauth/naver";
    const response_type = "code";
    const state = "01234567890123456789";

    location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&state=${state}`;
  };

  const googleOauthLogin = () => {
    const client_id =
      "724675302887-elk3qo3raci5e7q8rl00hf8n53l58djm.apps.googleusercontent.com";
    const redirect_uri = "http://localhost:3000/oauth/google";
    const response_type = "code";
    const scope = "profile";

    location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}`;
  };

  let icon;
  let clickType;

  if (snsType === "Kakao") {
    icon = (
      <S.IconColumn>
        <RiKakaoTalkFill />
      </S.IconColumn>
    );
    clickType = kakaoOauthLogin;
  } else if (snsType === "Naver") {
    icon = (
      <S.ImageColumn>
        <Image src="/sns/naver.png" />
      </S.ImageColumn>
    );
    clickType = naverOauthLogin;
  } else if (snsType === "Google") {
    icon = (
      <S.IconColumn>
        <FcGoogle />
      </S.IconColumn>
    );
    clickType = googleOauthLogin;
  }

  return (
    <S.Container snsType={snsType}>
      <Button handleOnClick={clickType}>
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
