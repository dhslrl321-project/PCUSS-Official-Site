import React from 'react';
import * as S from './styles';
import ProfileCard from '../../molecules/ProfileCard';

const ProfileGroup = ({ data }) => {

  return (
    <S.Container>
      {data.map(item => (
        <S.Wrapper data-aos="zoom-in" key={item.id}>
          <ProfileCard data={item} />
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default ProfileGroup;