import { useState } from "react";

import * as S from "./styles";

import { HiArrowNarrowDown } from "react-icons/hi";

import Label from "../../atoms/Label";
import CollapseCard from "../CollapseCard";

import { collapseData } from "../../../datas/StudentData";

const StudentCard = ({ studentId, studentName, totalNumber }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleIsHover = () => {
    setIsHover(!isHover);
  };

  // api 호출해서 CollapseCard에 넣어줘야 함
  return (
    <S.Container>
      <S.Unset>
        <S.Items>
          <Label styleType="Label" size="0.8">
            {studentId}
          </Label>
          <Label styleType="Label" size="0.8">
            {studentName}
          </Label>
        </S.Items>
        <S.Partition />
        <S.Items>
          <Label styleType="Label" size="0.8">
            {totalNumber}
          </Label>
          <S.Button onClick={toggleIsHover} isHover={isHover}>
            <S.IconWrapper isHover={isHover}>
              <HiArrowNarrowDown />
            </S.IconWrapper>
          </S.Button>
        </S.Items>
      </S.Unset>
      <S.CardWrapper isHover={isHover} count={collapseData.length * 57 + "px"}>
        <CollapseCard data={collapseData} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default StudentCard;
