import React from 'react';
import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import CircleGroup from '../../modules/CircleGroup';
import { headerData, cardData } from './data';

const Merit = () => {
  const { title, description } = headerData;

  return (
    <S.Container>
      <SectionHeader title={title} description={description} />
      <CircleGroup data={cardData} />
    </S.Container>
  );
};

export default Merit;