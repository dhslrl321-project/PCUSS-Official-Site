import * as S from "./styles";

import Label from "../../atoms/Label";
import ModalButton from "../../organisms/ModalButton";

const CollapseCard = ({ data }) => {
  const headerData = [
    { id: 1, title: "번호" },
    { id: 2, title: "활동 명" },
    { id: 3, title: "결과 및 성과" },
  ];

  return (
    <S.Container>
      <S.HeaderWrapper>
        {headerData.map((data) => (
          <Label key={data.id} styleType="Label" size="0.5rem">
            {data.title}
          </Label>
        ))}
      </S.HeaderWrapper>
      {data.map((item, index) => (
        <S.LabelWrapper key={index}>
          <S.Margin>
            <Label styleType="Label" size="0.5rem">
              {item.id}
            </Label>
          </S.Margin>
          <S.Margin>
            <Label styleType="Label" size="0.5rem">
              {item.activityName}
            </Label>
          </S.Margin>
          <S.Margin>
            <Label styleType="Label" size="0.5rem">
              {item.result}
            </Label>
          </S.Margin>
        </S.LabelWrapper>
      ))}
      <S.ModalWrapper>
        <ModalButton>활동 추가</ModalButton>
      </S.ModalWrapper>
    </S.Container>
  );
};

export default CollapseCard;
