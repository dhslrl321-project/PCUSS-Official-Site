import { useState } from "react";

import { useSelector } from "react-redux";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { FaBars } from "react-icons/fa";

import NavColumn from "../../molecules/NavColumn";
import ExpandableNavColumn from "../../molecules/ExpandableNavColumn";
import Profile from "../../molecules/Profile";

import {
  data as navigationData,
  profileData,
} from "../../../datas/NavigationData";

import * as S from "./styles";

const Navigation = ({ handleSidebarToggle }) => {
  const { dropdownData } = navigationData;

  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
      if (currPos.y === 0) setHideOnScroll(true);
    },
    [hideOnScroll]
  );

  const user = useSelector((state) => state.userReducer.user);

  let loggedInColumn;

  if (!user) {
    loggedInColumn = (
      <S.NavColumnWrapper>
        <NavColumn name="로그인" href="/sign-in" />
        <NavColumn name="회원 가입" href="/sign-up" />
      </S.NavColumnWrapper>
    );
  } else if (user) {
    const imageSrc = user.profileImage
      ? user.profileImage
      : "https://image.ohou.se/i/bucketplace-v2-development/uploads/default_images/avatar.png?gif=1&w=640&h=640&c=c";

    loggedInColumn = (
      <S.ExpandableNavColumnWrapper>
        <ExpandableNavColumn data={profileData}>
          <Profile src={imageSrc} />
        </ExpandableNavColumn>
      </S.ExpandableNavColumnWrapper>
    );
  }

  return (
    <S.Container>
      <S.NavWrapper show={hideOnScroll}>
        <S.NavColumnWrapper>
          <NavColumn name="배재대학교 정보보안학과" href="/" />
        </S.NavColumnWrapper>

        <S.MobileIcon onClick={handleSidebarToggle}>
          <FaBars />
        </S.MobileIcon>

        <S.Column>
          <S.ExpandableNavColumnWrapper>
            {dropdownData.map((data) => (
              <ExpandableNavColumn key={data.id} data={data} />
            ))}
          </S.ExpandableNavColumnWrapper>
        </S.Column>

        <S.Column>{loggedInColumn}</S.Column>
      </S.NavWrapper>
    </S.Container>
  );
};

export default Navigation;
