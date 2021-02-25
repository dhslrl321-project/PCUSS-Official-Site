import React from 'react';
import * as S from './styles';
import CircleCard from '../CircleCard';

const CircleGroup = ({ data, isDescVisible }) => {

  return (
    <S.Container>
      {data.map(item => (
        <S.Wrapper key={item.id}>
          <CircleCard data={item} isDescVisible={isDescVisible}/>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default CircleGroup;

CircleGroup.defaultProps = {
  isDescVisible: false,
};