import React from 'react';
import * as S from './styles';
import CircleCard from '../CircleCard';

const CircleGroup = ({ data }) => {

  return (
    <S.Container>
      {data.map(item => (
        <S.Wrapper>
          <CircleCard id={item.id} data={item}/>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default CircleGroup;