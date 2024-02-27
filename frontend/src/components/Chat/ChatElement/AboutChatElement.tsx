import { useContext } from "react";
import Typewriter from "typewriter-effect";
import AppContext from "../../../AppContext";

const ALCHEMY_ABOUT_SECTION: string = `We are Alchemy, your beacon in AI automation. Committed to redefining business through innovative solutions, we specialize in seamlessly integrating cutting-edge AI technologies. Our services include crafting intelligent chatbots for enhanced engagement, designing automated workflows for operational efficiency, and leveraging generative AI for comprehensive enterprise consulting. Alchemy is your partner in transforming businesses, unlocking the true potential of artificial intelligence for unparalleled success and growth. Embrace innovation, choose Alchemy.`;

const AboutChatElement = ({
  onFinishTyping,
}: {
  onFinishTyping: () => void;
}) => {
  const { showAbout } = useContext(AppContext);
  return (
    <p
      className="opacity-40 tablet:m-10 mt-10 text-lg laptop:text-xl"
      style={{
        textAlign: "left",
        fontFamily: "Ubuntu",
        letterSpacing: 2,
        lineHeight: 2,
      }}
    >
      <Typewriter
        onInit={(typewriter) =>
          typewriter
            .changeDelay(1)
            .typeString(
              `<span style="text-align:left;font-family:Ubuntu;letter-spacing:2;line-height:2;">${ALCHEMY_ABOUT_SECTION}</span>`
            )
            .start()
            .callFunction(() => {
              if (onFinishTyping) {
                showAbout.current = false;
                onFinishTyping();
              }
            })
        }
        options={{
          cursor: "",
        }}
      />
    </p>
  );
};

export default AboutChatElement;
