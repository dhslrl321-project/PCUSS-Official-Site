import React, { useState } from "react";
import * as S from "./styles";

import SectionHeader from "../../organisms/SectionHeader";
import Label from "../../atoms/Label";

const Student = ({ data }) => {
  const { headerData, numLabels, studentInfo, activityInfo } = data;
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
  };

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
      <S.InfoGroup>
        <S.InfoItemForStudent>
          {studentInfo.map((data) => (
            <Label styleType="Label" size="1.0">
              {data.name}
            </Label>
          ))}
        </S.InfoItemForStudent>
        <S.InfoItemForActivity>
          {activityInfo.map((data) => (
            <Label styleType="Label" size="1.0">
              {data.name}
            </Label>
          ))}
        </S.InfoItemForActivity>
      </S.InfoGroup>
    </S.Container>
  );
};

export default Student;
