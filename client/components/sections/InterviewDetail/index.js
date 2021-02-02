import React from 'react';
import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import SquircleCard from '../../modules/SquircleCard';
import QnAGroup from '../../modules/QnAGroup';

const InterviewDetail = ({ data }) => {
  const { headerData, cardData, qnaData } = data;
  const { title, titleDescription } = headerData;

  return (
    <S.Container>
      <SectionHeader title={title} description={titleDescription} />
      <SquircleCard data={cardData} />
      <QnAGroup data={qnaData} />
    </S.Container>
  );
};

export default InterviewDetail;

