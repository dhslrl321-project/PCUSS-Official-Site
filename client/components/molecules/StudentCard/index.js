import { useState } from "react";

import * as S from "./styles";
import { HiArrowNarrowDown } from "react-icons/hi";

import Label from "../../atoms/Label";

const StudentCard = ({ data }) => {
  const { content } = data;
  const [isHover, setIsHover] = useState(false);

  const toggleIsHover = () => {
    setIsHover(!isHover);
  };

  return (
    <S.Container>
      {content.map((item) => (
        <S.Items key={item.studentId}>
          <Label styleType="Label" size="0.5rem">
            {item.studentId}
          </Label>
          <Label styleType="Label" size="0.5rem">
            {item.name}
          </Label>
        </S.Items>
      ))}
      {content.map((item) => (
        <S.Items>
          <Label styleType="Label" size="0.5rem">
            {item.totalNumber}
          </Label>
          <S.Button
            onMouseEnter={toggleIsHover}
            onMouseLeave={toggleIsHover}
            isHover={isHover}
          >
            <HiArrowNarrowDown size="20" />
          </S.Button>
        </S.Items>
      ))}
    </S.Container>
  );
};

export default StudentCard;
