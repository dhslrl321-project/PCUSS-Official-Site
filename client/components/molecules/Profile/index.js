import * as S from "./styles";

import { GoChevronDown } from "react-icons/go";

import Image from "../../atoms/Image";

const Profile = ({ src }) => {
  return (
    <S.Container>
      <S.ImageWrapper>
        <Image src={src} />
      </S.ImageWrapper>
      <S.IconWrapper>
        <GoChevronDown />
      </S.IconWrapper>
    </S.Container>
  );
};

export default Profile;
