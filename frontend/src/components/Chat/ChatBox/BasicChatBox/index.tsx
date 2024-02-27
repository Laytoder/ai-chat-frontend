import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import ChatButton from "../../ChatButton";

const BasicChatBox = ({
  onInputChange,
  onSubmit,
  className,
}: {
  onInputChange?: () => void;
  onSubmit: (message: string) => void;
  className?: string;
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [initSubmitButton, setInitSubmitButton] = useState(false);

  const handleInputChange = (e: any) => {
    const { value } = e.target;
    setInputValue(value);
    if (value.trim() !== "") setInitSubmitButton(true);

    setShowSubmitButton(value.trim() !== "");
    if (onInputChange) onInputChange();
  };

  const handleBlur = (_: any) => {
    // Do not allow the textarea to lose focus
    textAreaRef.current!.focus();
    // Additional logic can be added here if needed
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      onSubmit(inputValue);
    }
  };

  useEffect(() => {
    textAreaRef.current!.style.height = "auto";
    textAreaRef.current!.style.height =
      textAreaRef.current?.scrollHeight + "px";
  }, [inputValue]);

  useEffect(() => {
    textAreaRef.current!.focus();
  }, []);

  return (
    <div
      className={`${className} flex justify-center items-center flex-col mb-10 tablet:mx-10 mt-10 text-base laptop:text-lg`}
    >
      <textarea
        style={{
          resize: "none",
          width: "100%",
          maxHeight: "100%",
          textAlign: "left",
          fontFamily: "Ubuntu",
          letterSpacing: 2,
          lineHeight: 2,
          color: "white",
          outline: "none",
          background: "transparent",
          overflow: "hidden",
        }}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        value={inputValue}
        rows={1}
        ref={textAreaRef}
        placeholder="Start Typing Here"
      />
      {initSubmitButton && (
        <ChatButton
          className={`mt-10 ${
            !showSubmitButton ? styles.submitButtonHidden : ""
          }`}
          onClick={() => onSubmit(inputValue)}
          label={"Submit"}
        />
      )}
    </div>
  );
};

export default BasicChatBox;
