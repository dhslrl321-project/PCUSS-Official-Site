import React from 'react';
import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import ProfileGroup from '../../modules/ProfileGroup';

const Professor = ({ data }) => {
  const { headerData, cardData } = data;
  const { title, titleDescription } = headerData;
  const { cards } = cardData;

  return (
    <S.Container>
      <SectionHeader title={title} description={titleDescription} />
      <ProfileGroup data={cards} />
    </S.Container>
  );
};

export default Professor;