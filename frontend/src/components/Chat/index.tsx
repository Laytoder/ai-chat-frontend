import { useContext, useEffect, useRef } from "react";
import { ChatBoxVariants, ChatElementVariants } from "../../types";
import ChatList from "./ChatList";
import styles from "./index.module.css";
import ChatBox from "./ChatBox";
import AppContext from "../../AppContext";
import genAiRes from "./helpers/aiResGen";

const Chat = () => {
  const {
    chatList,
    setChatList,
    showChatBox,
    setShowChatBox,
    showServices,
    showAbout,
    showContact,
  } = useContext(AppContext);

  const scrollRef = useRef<HTMLDivElement>(null);
  const userID = useRef<string | null>(null);

  const fetchAiMessage = async (message: string) => {
    if (userID.current) {
      const res = await genAiRes(message, userID.current);
      return res.data;
    } else {
      // when userID not available gen initial res which doesn't
      // need to be shown
      const tempRes = await genAiRes("");
      userID.current = tempRes.userID;
      console.log(tempRes);
      // once userID is available generate res with message
      const res = await genAiRes(message, userID.current!);
      return res.data;
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight;
      const height = scrollRef.current.clientHeight;
      const maxScrollTop = scrollHeight - height;
      scrollRef.current.scrollTo({
        top: maxScrollTop > 0 ? maxScrollTop : 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className={styles.chat} ref={scrollRef}>
      <ChatList
        chatList={chatList}
        onFinishTyping={() => {
          if (showServices.current == true) {
            const newChatList = [...chatList];
            newChatList.push({
              chatElementVariant: ChatElementVariants.SERVICES,
              chatBoxVariant: ChatBoxVariants.BASIC,
              element: {},
            });
            setChatList(newChatList);
          } else if (showAbout.current == true) {
            const newChatList = [...chatList];
            newChatList.push({
              chatElementVariant: ChatElementVariants.ABOUT,
              chatBoxVariant: ChatBoxVariants.BASIC,
              element: {},
            });
            setChatList(newChatList);
          } else if (showContact.current == true) {
            const newChatList = [...chatList];
            newChatList.push({
              chatElementVariant: ChatElementVariants.CONTACT,
              chatBoxVariant: ChatBoxVariants.BASIC,
              element: {},
            });
            setChatList(newChatList);
          } else setShowChatBox(true);
        }}
      />
      {showChatBox ? (
        <ChatBox
          type={chatList[chatList.length - 1].chatBoxVariant}
          onInputChange={() => scrollToBottom()}
          onSubmit={async (message: string) => {
            const newChatList = [...chatList];
            newChatList.push({
              chatElementVariant: ChatElementVariants.BASIC,
              chatBoxVariant: ChatBoxVariants.BASIC,
              element: {
                content: message,
                aiResponse: false,
                type: false,
              },
            });

            setChatList(newChatList);
            setShowChatBox(false);

            // gen ai response
            const aiMessage = await fetchAiMessage(message);
            // weird readdition of initial chat message for state management
            const finalChatList = [...chatList];
            finalChatList.push({
              chatElementVariant: ChatElementVariants.BASIC,
              chatBoxVariant: ChatBoxVariants.BASIC,
              element: {
                content: message,
                aiResponse: false,
                type: false,
              },
            });

            // Segregate by type of message
            if (aiMessage == "Services")
              finalChatList.push({
                chatElementVariant: ChatElementVariants.SERVICES,
                chatBoxVariant: ChatBoxVariants.BASIC,
                element: {},
              });
            else if (aiMessage == "About")
              finalChatList.push({
                chatElementVariant: ChatElementVariants.ABOUT,
                chatBoxVariant: ChatBoxVariants.BASIC,
                element: {},
              });
            else
              finalChatList.push({
                chatElementVariant: ChatElementVariants.BASIC,
                chatBoxVariant: ChatBoxVariants.BASIC,
                element: {
                  content: aiMessage,
                  aiResponse: true,
                  type: true,
                },
              });

            setChatList(finalChatList);
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Chat;
