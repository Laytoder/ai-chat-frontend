import { ChatBoxVariants } from "../../../types";
import BasicChatBox from "./BasicChatBox";
import BinaryChatBox from "./BinaryChatBox";
import styles from "./index.module.css";

const ChatBox = ({
  onInputChange,
  onSubmit,
  type,
}: {
  onInputChange?: () => void;
  onSubmit: (message: string) => void;
  type: ChatBoxVariants;
}) => {
  return type == ChatBoxVariants.BASIC ? (
    <BasicChatBox
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      className={styles.chatBox}
    />
  ) : (
    <BinaryChatBox onSubmit={onSubmit} className={styles.chatBox} />
  );
};

export default ChatBox;
