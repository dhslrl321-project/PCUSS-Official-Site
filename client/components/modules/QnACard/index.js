import React from 'react';
import * as S from './styles';
import Label from '../../atoms/Label';
import LargeDescription from '../LargeDescription';

const QnACard = ({ data }) => {
  const { label, largeDescriptionData } = data;

  return (
    <S.Container data-aos="zoom-in">
      <Label styleType="Label" size="1.2">Q. {label}</Label>
      <LargeDescription data={largeDescriptionData} styleType="OnlyDescription" />
    </S.Container>
  );
};

export default QnACard;