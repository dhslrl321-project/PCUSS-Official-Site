import React from 'react';
import * as S from './styles';
import SquircleCard from '../../molecules/SquircleCard';

const SquircleGroup = ({ data, isDetail }) => {

  return (
    <S.Container>
      {data.map(item => (
        <S.Wrapper key={item.id}>
          <SquircleCard data={item} as={item.id} isDetail={isDetail} />
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default SquircleGroup;