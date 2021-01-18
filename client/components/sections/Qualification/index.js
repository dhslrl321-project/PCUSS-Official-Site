import React, { useState, useRef } from 'react'
import SectionHeader from "../../modules/SectionHeader";
import ChatGroup from "../../modules/ChatGroup";
import * as S from "./styles";
import Label from '../../atoms/Label';
import { chatData, chatLabels } from "./data";

const Qualification = () => {

  const [chatIndex, setChatIndex] = useState(0);
  const [labels, setLabels] = useState(chatLabels);
  const handleChatLabelClick = (label) => {
    setChatIndex(label.id - 1);
    changeLabelFocus(label.id);
  }

  const changeLabelFocus = id => {
    setLabels(
      labels.map(label =>
        label.id === id
          ? { ...label, active: true }
          : { ...label, active: false })
    )
  }

  return (
    <S.Container>
      <SectionHeader title="우리가 추구하는 가치" description="보안 인재 양성을 위해 우리는 다음과 같은 역량을 겸비하려 합니다." />
      <S.LabelGroup>
        {labels.map(label =>
          <S.LabelItem key={label.id} active={label.active} onClick={(...args) => handleChatLabelClick(label, ...args)}>
            <Label styleType="SecondaryLabel" >{label.label}</Label>
          </S.LabelItem>)}
      </S.LabelGroup>
      <S.ChatWrapper>
        <ChatGroup data={chatData[chatIndex]} />
      </S.ChatWrapper>
    </S.Container>
  )
}

export default Qualification
