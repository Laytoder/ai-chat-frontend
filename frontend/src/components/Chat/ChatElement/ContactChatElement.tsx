import { useContext } from "react";
import Typewriter from "typewriter-effect";
import AppContext from "../../../AppContext";

const ALCHEMY_CONTACT_SECTION: string = `
Contact us at laytoder@gmail.com or leave your name and email (or preferred point of contact) below, and we'll get in touch with tailored solutions. If possible, please leave the link to your business website or provide a brief description of your business for a more personalized response. Let's embark on a journey of innovation together!
`;

const ContactChatElement = ({
  onFinishTyping,
}: {
  onFinishTyping: () => void;
}) => {
  const { showContact } = useContext(AppContext);
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
              `<span style="text-align:left;font-family:Ubuntu;letter-spacing:2;line-height:2;">${ALCHEMY_CONTACT_SECTION}</span>`
            )
            .start()
            .callFunction(() => {
              if (onFinishTyping) {
                showContact.current = false;
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

export default ContactChatElement;
