import React from 'react';
import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import CircleGroup from '../../modules/CircleGroup';

const Merit = ({ data }) => {
  const { headerData, cardData } = data;
  const { title, titleDescription } = headerData;
  const { cards } = cardData;

  return (
    <S.Container data-aos="zoom-in-up">
      <SectionHeader title={title} description={titleDescription} />
      <CircleGroup data={cards} />
    </S.Container>
  );
};

export default Merit;