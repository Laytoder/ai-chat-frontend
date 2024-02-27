import styles from "./index.module.css";

const ChatButton = ({
  className,
  onClick,
  label,
}: {
  className?: string;
  onClick?: () => void;
  label: String;
}) => {
  return (
    <button className={styles.submitButton + " " + className} onClick={onClick}>
      {label}
    </button>
  );
};

export default ChatButton;
