import { useEffect, useLayoutEffect, useState } from "react";
import Typewriter from "typewriter-effect";

const ServiceCard = ({
  name,
  description,
  onFinishTyping,
}: {
  name?: string;
  description?: string;
  onFinishTyping: () => void;
}) => {
  const [mounted, setMounted] = useState<boolean | undefined>();
  const [typed, setTyped] = useState<boolean>(false);
  let typed1: boolean, typed2: boolean;

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    typed1 = false;
    typed2 = false;
  });

  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        typed && mounted && "hover:bg-slate-800 hover:scale-105"
      } link`}
    >
      <h1 className="text-3xl">
        <Typewriter
          onInit={(typewriter) =>
            typewriter
              .changeDelay(1)
              .typeString(
                `<span style="text-align:left;font-family:Ubuntu;letter-spacing:2;line-height:2;">${name}</span>`
              )
              .start()
              .callFunction(() => {
                typed1 = true;
                if (typed1 && typed2) {
                  setTyped(true);
                  onFinishTyping();
                }
              })
          }
          options={{
            cursor: "",
          }}
        />
      </h1>
      <p className="mt-5 opacity-40 text-xl">
        <Typewriter
          onInit={(typewriter) =>
            typewriter
              .changeDelay(1)
              .typeString(
                `<span style="text-align:left;font-family:Ubuntu;letter-spacing:2;line-height:2;">${description}</span>`
              )
              .start()
              .callFunction(() => {
                typed2 = true;
                if (typed1 && typed2) {
                  setTyped(true);
                  onFinishTyping();
                }
              })
          }
          options={{
            cursor: "",
          }}
        />
      </p>
    </div>
  );
};

export default ServiceCard;
