import { Dispatch, SetStateAction } from "react";

// Chat Element Types

export enum ChatElementVariants {
  BASIC,
  SERVICES,
  ABOUT,
  CONTACT,
}

export type BasicChatElementType = {
  content?: string;
  aiResponse?: boolean;
  type?: boolean;
  onFinishTyping?: () => void;
};

export type ChatElementType = {
  chatElementVariant: ChatElementVariants;
  chatBoxVariant: ChatBoxVariants;
  element: BasicChatElementType;
};

// ChatBox Types

export enum ChatBoxVariants {
  BASIC,
  BINARY,
}

// App Context Type
export type AppContextType = {
  chatList: ChatElementType[];
  setChatList: Dispatch<SetStateAction<ChatElementType[]>>;
  showChatBox: boolean;
  setShowChatBox: Dispatch<SetStateAction<boolean>>;
  showServices: React.MutableRefObject<boolean>;
  showAbout: React.MutableRefObject<boolean>;
  showContact: React.MutableRefObject<boolean>;
};
