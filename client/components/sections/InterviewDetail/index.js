import React from 'react';
import * as S from './styles';
import SectionHeader from '../../organisms/SectionHeader';
import SquircleCard from '../../molecules/SquircleCard';
import QnAGroup from '../../organisms/QnAGroup';

const InterviewDetail = ({ data }) => {
  const { headerData, pageData } = data;
  const { cardData, qnaData } = pageData;
  const { title, titleDescription } = headerData;

  return (
    <S.Container data-aos="zoom-in-up">
      <SectionHeader title={title} description={titleDescription} />
      <SquircleCard data={cardData} isDetail={true} />
      <QnAGroup data={qnaData} />
    </S.Container>
  );
};

export default InterviewDetail;