import React from 'react'
import Title from '../../atoms/Title';
import Image from "../../atoms/Image";
import Label from "../../atoms/Label";
import * as S from "./styles";

const LargeDescription = ({ data, styleType }) => {
  const { title, descs, quotation, src } = data;
  return (
    <S.Container data-aos="zoom-in">
      {styleType === "OnlyDescription" ? <></> : <Title styleType="SubTitle">{title}</Title>}
      <S.DescriptionWrapper isOnlyDescription={styleType === "OnlyDescription"}>
        <div>
          {descs.map(desc =>
            <S.LabelWrapper key={desc.id}>
              <Label styleType="Description">
                {desc.content}
              </Label>
            </S.LabelWrapper>
          )}
        </div>
        {styleType === "OnlyDescription" ?
          (<></>) :
          (<>
            <S.ImageWrapper isImg={src !== null}>
              <Image src={src} />
            </S.ImageWrapper>
            <S.SourceWrapper isImg={quotation === null}>
              <Label styleType="Description" size="0.9">{quotation}</Label>
            </S.SourceWrapper>
          </>)}
      </S.DescriptionWrapper>
    </S.Container>
  )
}

export default LargeDescription

LargeDescription.defaultProps = {
  data: { isImg: false }
}