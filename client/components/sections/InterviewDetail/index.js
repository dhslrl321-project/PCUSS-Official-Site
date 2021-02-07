import React from 'react';
import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import SquircleCard from '../../modules/SquircleCard';
import QnAGroup from '../../modules/QnAGroup';

const InterviewDetail = ({ data, pageNumber }) => {
  const { headerData, pageData } = data;
  const { cardData, qnaData } = pageData[pageNumber];
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

