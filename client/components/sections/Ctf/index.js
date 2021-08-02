import { useState } from 'react'
import SectionHeader from "../../organisms/SectionHeader";
import ChatGroup from "../../organisms/ChatGroup";
import LargeDescription from "../../organisms/LargeDescription";

import * as S from "./styles";
import Label from "../../atoms/Label";

const Ctf = ({ data }) => {

  const { headerData, chatLabels, chatData, largeDescriptionData } = data;
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
    <S.Container>
      <SectionHeader title={title} description={description} />
      <LargeDescription data-aos="zoom-in" data={largeDescriptionData} styleType="WithImage" />
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

export default Ctf;
