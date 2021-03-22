import React from 'react';
import * as S from './styles';
import SquircleGroup from '../../modules/SquircleGroup';
import SectionHeader from '../../modules/SectionHeader';

const Interview = ({ data }) => {
  const { headerData, cardData } = data;
  const { title, titleDescription } = headerData;
  const { cards } = cardData;

  return (
    <S.Container data-aos="zoom-in">
      <SectionHeader title={title} description={titleDescription} />
      <SquircleGroup data={cards} isDetail={false} />
    </S.Container>
  );
};

export default Interview;