import React from 'react';
import * as S from './styles';
import SectionHeader from '../../organisms/SectionHeader';
import ProfileGroup from '../../organisms/ProfileGroup';

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