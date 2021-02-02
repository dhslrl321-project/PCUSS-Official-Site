import React from 'react';
import * as S from './styles';
import QnACard from '../QnACard';

const QnAGroup = ({ data }) => {
  const { list } = data;

  return (
    <S.Container>
      {list.map(item => (
        <S.Wrapper key={item.id}>
          <QnACard data={item} />
        </S.Wrapper>
      ))}
    </S.Container>
  )
};

export default QnAGroup;