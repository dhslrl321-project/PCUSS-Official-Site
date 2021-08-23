import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as S from "./styles";

import { HiArrowNarrowDown } from "react-icons/hi";

import Label from "../../atoms/Label";
import CollapseCard from "../CollapseCard";

const StudentCard = ({
  studentId,
  studentName,
  totalNumber,
  handleSeeDetailButtonClick,
}) => {
  const [isHover, setIsHover] = useState(false);

  const toggleIsHover = (studentId) => {
    setIsHover(!isHover);
    if (isHover === false) {
      handleSeeDetailButtonClick(studentId);
    }
  };

  const { students, grade } = useSelector((state) => state.studentReducer);

  const selectedStudent = students.filter(
    (student) => student.studentId === studentId
  );

  const { activities } = selectedStudent[0];

  useEffect(() => {
    setIsHover(false);
  }, [grade]);

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
          <S.Button onClick={() => toggleIsHover(studentId)} isHover={isHover}>
            <S.IconWrapper isHover={isHover}>
              <HiArrowNarrowDown />
            </S.IconWrapper>
          </S.Button>
        </S.Items>
      </S.Unset>
      <S.CardWrapper isHover={isHover} count={activities.length * 53 + "px"}>
        {/* <S.CardWrapper isHover={isHover} count={200 + "px"}> */}
        <CollapseCard data={activities} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default StudentCard;
