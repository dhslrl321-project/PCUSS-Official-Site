import React from 'react';
import * as S from './styles';
import Label from '../../atoms/Label';

const QnACard = ({ data }) => {
  const { label, description } = data;

  return (
    <S.Container>
      <Label styleType="Label" size="1.1">{label}</Label>
      <Label styleType="Description" size="0.8">{description}</Label>
    </S.Container>
  );
};

export default QnACard;