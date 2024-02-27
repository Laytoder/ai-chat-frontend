import { BasicChatElementType } from "../../../types";
import Typewriter from "typewriter-effect";

const BasicChatElement = ({
  content,
  aiResponse,
  type,
  onFinishTyping,
}: BasicChatElementType) => {
  return (
    <p
      className={`${
        aiResponse ? "opacity-40" : "opacity-100"
      } tablet:m-10 mt-10 ${aiResponse ? "text-lg" : "text-base"} laptop:${
        aiResponse ? "text-xl" : "text-lg"
      }`}
      style={{
        textAlign: "left",
        fontFamily: "Ubuntu",
        letterSpacing: 2,
        lineHeight: 2,
      }}
    >
      {type ? (
        <Typewriter
          onInit={(typewriter) =>
            typewriter
              .changeDelay(1)
              .typeString(
                `<span style="text-align:left;font-family:Ubuntu;letter-spacing:2;line-height:2;">${content}</span>`
              )
              .start()
              .callFunction(() => {
                if (onFinishTyping) onFinishTyping();
              })
          }
          options={{
            cursor: "",
          }}
        />
      ) : (
        content
      )}
    </p>
  );
};

export default BasicChatElement;
