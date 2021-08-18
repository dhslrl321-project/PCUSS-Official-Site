import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as S from "./styles";

import SectionHeader from "../../organisms/SectionHeader";
import Label from "../../atoms/Label";
import StudentGroup from "../../organisms/StudentGroup";

import { loadStudent } from "../../../reducer/student";

const Student = ({ data }) => {
  const { headerData, numLabels } = data;
  const { title, description } = headerData;

  const [labels, setLabels] = useState(numLabels);
  // const [activeId, setActiveId] = useState(17);
  const dispatch = useDispatch();

  const handleNumLabelClick = (id) => {
    setLabels(
      labels.map((label) =>
        label.id === id
          ? { ...label, active: true }
          : { ...label, active: false }
      )
    );
    // setActiveId(id);
    dispatch(loadStudent(id));
  };

  const { students } = useSelector((state) => state.studentReducer);

  useEffect(() => {
    dispatch(loadStudent(17));
  }, []); // loading 표시나게 바꾸기

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
        <StudentGroup data={students} />
      </S.CardWrapper>
    </S.Container>
  );
};

export default Student;
