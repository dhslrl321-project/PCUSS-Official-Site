import ChatCard from '../../molecules/ChatCard';

import * as S from "./styles";
const ChatGroup = ({ data }) => {
  const { conversations } = data;

  return (
    <S.Container>

      {conversations.map(conversation => (
        <S.ChatCardWrapper key={conversation.id}>
          <ChatCard data={conversation} />
        </S.ChatCardWrapper>))}

    </S.Container>
  )
}

export default ChatGroup
