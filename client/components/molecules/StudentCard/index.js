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
          <Label styleType="Label" size="0.5">
            {studentId}
          </Label>
          <Label styleType="Label" size="0.5">
            {studentName}
          </Label>
        </S.Items>
        <S.Partition />
        <S.Items>
          <Label styleType="Label" size="0.5">
            {totalNumber}
          </Label>
          <S.Button onClick={toggleIsHover}>
            <S.IconWrapper isHover={isHover}>
              <HiArrowNarrowDown />
            </S.IconWrapper>
          </S.Button>
        </S.Items>
      </S.Unset>
      <S.CardWrapper isHover={isHover}>
        <CollapseCard data={collapseData} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default StudentCard;
