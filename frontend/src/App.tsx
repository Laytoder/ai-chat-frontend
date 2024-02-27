import { useMemo, useRef, useState } from "react";
import Chat from "./components/Chat";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import {
  AppContextType,
  ChatBoxVariants,
  ChatElementType,
  ChatElementVariants,
} from "./types";
import AppContext from "./AppContext";

function App() {
  const starterChat: ChatElementType[] = [
    {
      chatElementVariant: ChatElementVariants.BASIC,
      chatBoxVariant: ChatBoxVariants.BASIC,
      element: {
        content:
          "Hi I'm TARS. One of the first Alchemist built by Alchemy. I'm here to help you find the perfect AI automation solution for your enterprise. Go ahead and talk to me about your business or just put the link to your website. I might just surprise you with what's possible! However, if you're here for other questions, feel free to ask, I'm always here to help.",
        aiResponse: true,
        type: true,
      },
    },
    // {
    //   chatElementVariant: ChatElementVariants.BASIC,
    //   chatBoxVariant: ChatBoxVariants.BASIC,
    //   element: {
    //     content:
    //       "Can you create build a ChatBot on custom data that is related to my use case?",
    //     aiResponse: false,
    //   },
    // },
    // {
    //   chatElementVariant: ChatElementVariants.BASIC,
    //   chatBoxVariant: ChatBoxVariants.BASIC,
    //   element: {
    //     content: "Yes, that's exactly what we do.",
    //     aiResponse: true,
    //   },
    // },
    // {
    //   chatElementVariant: ChatElementVariants.BASIC,
    //   chatBoxVariant: ChatBoxVariants.BASIC,
    //   element: {
    //     content:
    //       "How to decide what exactly to build? Do you offer consultation",
    //     aiResponse: false,
    //   },
    // },
    // {
    //   chatElementVariant: ChatElementVariants.BASIC,
    //   chatBoxVariant: ChatBoxVariants.BASIC,
    //   element: {
    //     content:
    //       "Yes, consultation is provided under the Standard and Premium package. The Basic one can only be used when you provide a direct solution with all the data required.",
    //     aiResponse: true,
    //   },
    // },
    // {
    //   chatElementVariant: ChatElementVariants.BASIC,
    //   chatBoxVariant: ChatBoxVariants.BASIC,
    //   element: {
    //     content: "Can you build a UI similar to what we are using right now?",
    //     aiResponse: false,
    //   },
    // },
    // {
    //   chatElementVariant: ChatElementVariants.BASIC,
    //   chatBoxVariant: ChatBoxVariants.BASIC,
    //   element: {
    //     content:
    //       "Yes, we will build a custom UI for you if you opt for the Premium Package.",
    //     aiResponse: true,
    //   },
    // },
    // { variant: ChatElementVariants.BINARY },
  ];

  const [chatList, setChatList] = useState<ChatElementType[]>(starterChat);

  const [showChatBox, setShowChatBox] = useState<boolean>(false);

  const showServices = useRef<boolean>(false);
  const showAbout = useRef<boolean>(false);
  const showContact = useRef<boolean>(false);

  const appContext: AppContextType = useMemo(() => {
    return {
      chatList,
      setChatList,
      showChatBox,
      setShowChatBox,
      showServices,
      showAbout,
      showContact,
    };
  }, [chatList, setChatList, showChatBox, setShowChatBox]);

  return (
    <>
      <Cursor />
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <div className="container mx-auto">
        <AppContext.Provider value={appContext}>
          <Header />
          <Chat />
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
