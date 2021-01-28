import React, { useState } from 'react'
import * as S from "./styles";
import SectionHeader from "../../modules/SectionHeader";
import JobGroup from "../../modules/JobGroup";
import Label from '../../atoms/Label';

const Suggestion = ({ data }) => {
  const [carrerLabel, setCarrerLabel] = useState("태그를 클릭해보세요!");

  const handleJobCardOnClick = (category) => {

    switch (category) {
      case 1:
        setCarrerLabel("보안 솔루션 개발 / 관제 / 운영");
        break;
      case 2:
        setCarrerLabel("정보 보안 컨설턴트");
        break;
      case 3:
        setCarrerLabel("모의 해킹 전문가");
        break;
      case 4:
        setCarrerLabel("침해사고 대응 전문가");
        break;
      default:
        setCarrerLabel("");
        break;
    }
  }

  return (
    <S.Container>
      <SectionHeader title="정보보안 직무에는 무엇이 있을까요?" description="아래 태그중 흥미로운 단어나 키워드를 선택해보세요!" />
      <JobGroup data={data} handleJobCardOnClick={handleJobCardOnClick} />
      <S.SuggestionTextWrapper>
        <Label styleType="Label" size="1.3">{carrerLabel}</Label>
      </S.SuggestionTextWrapper>
    </S.Container>
  )
}

export default Suggestion
