import React from 'react';
import * as S from './styles';
import Image from '../../atoms/Image';
import Label from '../../atoms/Label';

const ProfileCard = ({ data }) => {
  const { name, email, finalEducation, fields, src } = data;
  const { emailFrame, finalEducationFrame, fieldFrame } = fixedData;

  return (
    <S.Container>
      <S.InfoColumn>
        <S.PictureColumn>
          <Image src={src} />
        </S.PictureColumn>
        <Label styleType="Label" size="1.0">{name}</Label>
        <Label styleType="Description" size="0.7">{emailFrame + email}</Label>
      </S.InfoColumn>
      <S.DetailColumn>
        <Label styleType="Label" size="1.0">{finalEducationFrame + finalEducation}</Label>
        <Label styleType="Label" size="1.0">{fieldFrame}</Label>
        {fields.map(item => (
          <Label styleType="Description" size="0.7">{" - " + item}</Label>
        ))}
      </S.DetailColumn>
    </S.Container>
  );
};

export default ProfileCard;

const fixedData = {
  emailFrame: "Email : ",
  finalEducationFrame: "최종 학위 : ",
  fieldFrame: "연구 관심 분야",
};