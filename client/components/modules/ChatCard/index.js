import React, { useEffect } from 'react'
import * as S from "./styles";
import Image from "../../atoms/Image";
import Label from '../../atoms/Label';
import AOS from "aos";
import "aos/dist/aos.css";

const ChatCard = ({ data }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  })
  const { src, chatting, isQuestions } = data;
  const aosProps = isQuestions ? "zoom-in-right" : "zoom-in-left";

  return (
    <S.Container isQuestions={isQuestions} data-aos={aosProps} >
      <S.ChatIconWrapper>
        <Image styleType="Icon" src={src} />
      </S.ChatIconWrapper>
      <S.ChatBallon isQuestions={isQuestions}>
        <Label styleType="SecondaryDescription">{chatting}</Label>
      </S.ChatBallon>
      <S.EmptyColumn />
    </S.Container>
  )
}

export default ChatCard
