import { ChatElementType, ChatElementVariants } from "../../types";
import ChatElement from "./ChatElement";

const ChatList = ({
  chatList,
  onFinishTyping,
}: {
  chatList: ChatElementType[];
  onFinishTyping?: () => void;
}) => {
  return (
    <>
      {chatList.map((chatElement: ChatElementType, i) => {
        chatElement.element!.onFinishTyping = onFinishTyping;
        return (
          <ChatElement chatElement={chatElement} key={`chatElement_${i}`} />
        );
      })}
    </>
  );
};

export default ChatList;
