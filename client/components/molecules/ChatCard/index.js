import Image from "../../atoms/Image";
import Label from '../../atoms/Label';

import * as S from "./styles";

const ChatCard = ({ data }) => {

  const { src, chatting, isQuestions } = data;
  return (
    <S.Container
      isQuestions={isQuestions}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-duration="500">
      <S.ChatIconWrapper>
        <Image src={src} />
      </S.ChatIconWrapper>
      <S.ChatBallon isQuestions={isQuestions}>
        <Label styleType="Description" size="0.8">{chatting}</Label>
      </S.ChatBallon>
      <S.EmptyColumn />
    </S.Container>
  )
}

export default ChatCard
