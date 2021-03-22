import React, { useState } from 'react'
import SectionHeader from "../../modules/SectionHeader";
import ChatGroup from "../../modules/ChatGroup";
import * as S from "./styles";
import Label from '../../atoms/Label';

const Qualification = ({ data }) => {
  const { headerData, chatLabels, chatData } = data;
  const { title, description } = headerData;

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
    <S.Container data-aos="zoom-in-up">
      <SectionHeader title={title} description={description} />
      <S.LabelGroup>
        {labels.map(label =>
          <S.LabelItem key={label.id} active={label.active} onClick={(...args) => handleChatLabelClick(label, ...args)}>
            <Label styleType="Label" size="1.2">{label.label}</Label>
          </S.LabelItem>)}
      </S.LabelGroup>
      <S.ChatWrapper>
        <ChatGroup data={chatData[chatIndex]} />
      </S.ChatWrapper>
    </S.Container>
  )
}

export default Qualification
