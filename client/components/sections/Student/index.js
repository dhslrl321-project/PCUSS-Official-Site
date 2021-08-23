import React, { useState } from "react";

import * as S from "./styles";

import SectionHeader from "../../organisms/SectionHeader";
import Label from "../../atoms/Label";
import StudentGroup from "../../organisms/StudentGroup";

const Student = ({
  data,
  handleStudentIdLabelClick,
  handleSeeDetailButtonClick,
}) => {
  const { headerData, numLabels } = data;
  const { title, description } = headerData;

  const [labels, setLabels] = useState(numLabels);

  const handleNumLabelClick = (id) => {
    setLabels(
      labels.map((label) =>
        label.id === id
          ? { ...label, active: true }
          : { ...label, active: false }
      )
    );
    handleStudentIdLabelClick(id);
  };

  const studentInfo = [
    { id: 1, name: "학번" },
    { id: 2, name: "이름" },
  ];

  const activityInfo = [
    { id: 1, name: "활동 수" },
    { id: 2, name: "자세히" },
  ];

  return (
    <S.Container data-aos="zoom-in-up">
      <SectionHeader title={title} description={description} />
      <S.LabelGroup>
        {labels.map((label) => (
          <S.LabelItem
            key={label.id}
            active={label.active}
            onClick={() => handleNumLabelClick(label.id)}
          >
            <Label styleType="Label" size="1.2">
              {label.label}
            </Label>
          </S.LabelItem>
        ))}
      </S.LabelGroup>
      <S.CardWrapper>
        <S.InfoGroup>
          <S.InfoColumn>
            {studentInfo.map((data) => (
              <Label key={data.id} styleType="Label" size="0.8">
                {data.name}
              </Label>
            ))}
          </S.InfoColumn>
          <S.Partition />
          <S.InfoColumn>
            {activityInfo.map((data) => (
              <Label key={data.id} styleType="Label" size="0.8">
                {data.name}
              </Label>
            ))}
          </S.InfoColumn>
        </S.InfoGroup>
        <StudentGroup handleSeeDetailButtonClick={handleSeeDetailButtonClick} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default Student;
