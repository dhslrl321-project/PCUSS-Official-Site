import React from 'react';
import * as S from './styles';
import SectionHeader from '../../modules/SectionHeader';
import CircleGroup from '../../modules/CircleGroup';

const Club = ({ data, isDescVisible }) => {
  const { headerData, cardData } = data;
  const { title, titleDescription } = headerData;
  const { cards } = cardData;

  return (
    <S.Container id="club" data-aos="zoom-in-up">
      <SectionHeader title={title} description={titleDescription} />
      <CircleGroup data={cards} isDescVisible={isDescVisible} />
    </S.Container>
  );
};

export default Club;

Club.defaultProps = {
  isDescVisible: true,
};