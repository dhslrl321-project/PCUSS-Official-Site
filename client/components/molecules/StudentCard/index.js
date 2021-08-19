import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";

import { HiArrowNarrowDown } from "react-icons/hi";

import Label from "../../atoms/Label";
import CollapseCard from "../CollapseCard";

const StudentCard = ({
  studentId,
  studentName,
  totalNumber,
  handleSeeMoreButtonClick,
}) => {
  const { grade, students } = useSelector((state) => state.studentReducer);
  const [isHover, setIsHover] = useState(false);
  const [nowGrade, setNowGrade] = useState(grade);

  const selectedStudent = students.filter(
    (student) => student.studentId === studentId
  );

  const { activities } = selectedStudent[0];

  const toggleIsHover = (studentId) => {
    setIsHover(!isHover);
    if (!isHover) {
      handleSeeMoreButtonClick(studentId);
    }
  };

  useEffect(() => {
    if (grade !== nowGrade) {
      setIsHover(false);
      setNowGrade(grade);
    }
  });

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
          <S.Button onClick={() => toggleIsHover(studentId)} isHover={isHover}>
            <S.IconWrapper isHover={isHover}>
              <HiArrowNarrowDown />
            </S.IconWrapper>
          </S.Button>
        </S.Items>
      </S.Unset>
      <S.CardWrapper isHover={isHover} count={activities.length * 53 + "px"}>
        <CollapseCard data={activities} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default StudentCard;
