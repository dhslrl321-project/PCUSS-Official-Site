import React from 'react';
import * as S from './styles';
import ProfileCard from '../ProfileCard';

const ProfileGroup = ({ data }) => {

  return (
    <S.Container>
      {data.map(item => (
        <S.Wrapper key={item.id}>
          <ProfileCard data={item} />
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default ProfileGroup;