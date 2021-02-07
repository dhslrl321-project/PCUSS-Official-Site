import React from 'react';
import * as S from './styles';
import SquircleCard from '../SquircleCard';

const SquircleGroup = ({ data }) => {

  return (
    <S.Container>
      {data.map(item => (
        <S.Wrapper key={item.id}>
          <SquircleCard data={item} as={item.id}/>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default SquircleGroup;