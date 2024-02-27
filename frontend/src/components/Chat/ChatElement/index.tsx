import { ChatElementType, ChatElementVariants } from "../../../types";
import AboutChatElement from "./AboutChatElement";
import BasicChatElement from "./BasicChatElement";
import ContactChatElement from "./ContactChatElement";
import ServicesChatElement from "./ServicesChatElement";

const ChatElement = ({ chatElement }: { chatElement: ChatElementType }) => {
  if (chatElement.chatElementVariant == ChatElementVariants.BASIC)
    return (
      <BasicChatElement
        content={chatElement.element!.content}
        aiResponse={chatElement.element!.aiResponse}
        type={chatElement.element!.type}
        onFinishTyping={chatElement.element!.onFinishTyping}
      />
    );
  else if (chatElement.chatElementVariant == ChatElementVariants.SERVICES)
    return (
      <ServicesChatElement
        onFinishTyping={chatElement.element!.onFinishTyping!}
      />
    );
  else if (chatElement.chatElementVariant == ChatElementVariants.ABOUT)
    return (
      <AboutChatElement onFinishTyping={chatElement.element!.onFinishTyping!} />
    );
  else
    return (
      <ContactChatElement
        onFinishTyping={chatElement.element!.onFinishTyping!}
      />
    );
};

export default ChatElement;
