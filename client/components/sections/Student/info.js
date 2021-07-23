import React from "react";
import * as S from "./info-styles";

import Label from "../../atoms/Label";

const Info = () => {
  return (
    <S.Container>
      <S.Column>
        <S.Item>
          <Label styleType="Label" size="0.8">
            학번
          </Label>
        </S.Item>
        <S.Item>
          <Label styleType="Label" size="0.8">
            이름
          </Label>
        </S.Item>
        <S.Item>
          <Label styleType="Label" size="0.8">
            활동 수
          </Label>
        </S.Item>
        <S.Item>
          <Label styleType="Label" size="0.8">
            자세히
          </Label>
        </S.Item>
      </S.Column>
    </S.Container>
  );
};

export default Info;
