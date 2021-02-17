import * as S from "./styles";
import Image from "../../atoms/Image";
import Label from '../../atoms/Label';

const ChatCard = ({ data }) => {

  const { src, chatting, isQuestions } = data;
  const aosProps = isQuestions ? "fade-right" : "fade-left";

  return (
    <S.Container isQuestions={isQuestions} data-aos={aosProps} data-aos-offset="300" data-aos-duration="500">
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
