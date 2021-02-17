import React from 'react'
import Title from '../../atoms/Title';
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";
import * as S from "./styles";

const LargeDescription = ({ data }) => {
  const { title, descs, source, isImg, src } = data;
  return (
    <S.Container data-aos="zoom-in">
      <Title styleType="SubTitle">{title}</Title>
      <S.DescriptionWrapper>
        <div>
          {descs.map(desc =>
            <S.LabelWrapper key={desc.id}>
              <Label styleType="Description">
                {desc.content}
              </Label>
            </S.LabelWrapper>
          )}
        </div>
        <S.ImageWrapper isImg={isImg}>
          <Image src={src} />
        </S.ImageWrapper>

        <S.SourceWrapper isImg={isImg}>
          <Label styleType="Description" size="0.9">{source}</Label>
        </S.SourceWrapper>
      </S.DescriptionWrapper>
    </S.Container>
  )
}

export default LargeDescription

LargeDescription.defaultProps = {
  data: { isImg: false }
}