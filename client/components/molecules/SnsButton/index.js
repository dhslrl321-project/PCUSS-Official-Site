import * as S from "./styles";

import { RiKakaoTalkFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

import Label from "../../atoms/Label";
import Button from "../../atoms/Button";
import Image from "../../atoms/Image";

const SnsButton = ({ snsType }) => {
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
      <Button>
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
