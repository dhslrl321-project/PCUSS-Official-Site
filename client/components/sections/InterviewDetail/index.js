import React from 'react';
import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import SquircleCard from '../../modules/SquircleCard';
import QnAGroup from '../../modules/QnAGroup';

const InterviewDetail = ({ data }) => {
  const { headerData, pageData } = data;
  const { cardData, qnaData } = pageData;
  const { title, titleDescription } = headerData;

  return (
    <S.Container>
      <SectionHeader title={title} description={titleDescription} />
      <SquircleCard data={cardData} isDetail={true} />
      <QnAGroup data={qnaData} />
    </S.Container>
  );
};

export default InterviewDetail;