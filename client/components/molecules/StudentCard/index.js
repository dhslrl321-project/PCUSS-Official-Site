import { useState } from "react";

import * as S from "./styles";

import { HiArrowNarrowDown } from "react-icons/hi";

import Label from "../../atoms/Label";

const StudentCard = ({ studentId, studentName, totalNumber }) => {
  const [isHover, setIsHover] = useState(false);

  const toggleIsHover = () => {
    setIsHover(!isHover);
  };

  return (
    <S.Container>
      <S.Items>
        <Label styleType="Label" size="0.5rem">
          {studentId}
        </Label>
        <S.Margin>
          <Label styleType="Label" size="0.5rem">
            {studentName}
          </Label>
        </S.Margin>
      </S.Items>
      <S.Partition />
      <S.Items>
        <S.Margin>
          <Label styleType="Label" size="0.5rem">
            {totalNumber}
          </Label>
        </S.Margin>
        <S.Button
          onMouseEnter={toggleIsHover}
          onMouseLeave={toggleIsHover}
          isHover={isHover}
        >
          <HiArrowNarrowDown />
        </S.Button>
      </S.Items>
    </S.Container>
  );
};

// const StudentCard2 = ({ studentId, studentName, totalNumber }) => {
//   const [isHover, setIsHover] = useState(false);

//   return (
//     <S2.Container>
//       <S2.Column>
//         <S2.Item>{studentId}</S2.Item>
//         <S2.Item>{studentName}</S2.Item>
//         <S2.Item>{totalNumber}</S2.Item>
//         <HiArrowNarrowDown id="arrow" />
//       </S2.Column>
//     </S2.Container>
//   );
// };

export default StudentCard;
