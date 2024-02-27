import { Popover } from "@headlessui/react";
import Button from "./Button";
import Alchemy from "./Alchemy";
import { ChatBoxVariants, ChatElementVariants } from "../types";
import { useContext } from "react";
import AppContext from "../AppContext";

const Header = () => {
  const {
    chatList,
    setChatList,
    setShowChatBox,
    showServices,
    showAbout,
    showContact,
  } = useContext(AppContext);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between pt-2 pr-2 laptop:p-0">
              <div className={`flex items-center justify-between`}>
                <Alchemy scale={0.55} />
                <h1 className="ml-2 mt-1.5 text-xl font-medium cursor-pointer mob:p-2 laptop:p-0">
                  {"Alchemy"}.
                </h1>
              </div>
              <Popover.Button>
                <img
                  className="mt-1.5 h-5"
                  src={`/images/${
                    !open ? "menu-white.svg" : "cancel-white.svg"
                  }`}
                ></img>
              </Popover.Button>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${"bg-slate-800"} shadow-md rounded-md`}
            >
              <div
                className="grid grid-cols-1"
                style={{ fontFamily: "Ubuntu" }}
              >
                <Button
                  onClick={() => {
                    console.log("services button clicked");
                    const newChatList = [...chatList]; // Create a new array to avoid mutating state directly
                    newChatList.push({
                      chatElementVariant: ChatElementVariants.BASIC,
                      chatBoxVariant: ChatBoxVariants.BASIC,
                      element: {
                        content: "What services do you offer?",
                        aiResponse: false,
                        type: true,
                      },
                    });
                    setChatList(newChatList);
                    setShowChatBox(false);
                    showServices.current = true;
                  }}
                >
                  Services
                </Button>
                <Button
                  onClick={() => {
                    const newChatList = [...chatList]; // Create a new array to avoid mutating state directly
                    newChatList.push({
                      chatElementVariant: ChatElementVariants.BASIC,
                      chatBoxVariant: ChatBoxVariants.BASIC,
                      element: {
                        content: "Who are you guys?",
                        aiResponse: false,
                        type: true,
                      },
                    });
                    setChatList(newChatList);
                    setShowChatBox(false);
                    showAbout.current = true;
                  }}
                >
                  About
                </Button>
                <Button
                  onClick={() => {
                    const newChatList = [...chatList]; // Create a new array to avoid mutating state directly
                    newChatList.push({
                      chatElementVariant: ChatElementVariants.BASIC,
                      chatBoxVariant: ChatBoxVariants.BASIC,
                      element: {
                        content: "How should I contact you?",
                        aiResponse: false,
                        type: true,
                      },
                    });
                    setChatList(newChatList);
                    setShowChatBox(false);
                    showContact.current = true;
                  }}
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky bg-black dark:text-white top-10 z-10 tablet:flex`}
      >
        <div className={`flex items-center justify-between`}>
          <Alchemy scale={0.55} />
          <h1 className="ml-3.5 mt-1.5 text-xl font-medium cursor-pointer mob:p-2 laptop:p-0">
            {"Alchemy"}.
          </h1>
        </div>
        <div className="mt-1.5 flex" style={{ fontFamily: "Ubuntu" }}>
          <Button
            onClick={() => {
              const newChatList = [...chatList]; // Create a new array to avoid mutating state directly
              newChatList.push({
                chatElementVariant: ChatElementVariants.BASIC,
                chatBoxVariant: ChatBoxVariants.BASIC,
                element: {
                  content: "What services do you offer?",
                  aiResponse: false,
                  type: true,
                },
              });
              setChatList(newChatList);
              setShowChatBox(false);
              showServices.current = true;
            }}
          >
            Services
          </Button>
          <Button
            onClick={() => {
              const newChatList = [...chatList]; // Create a new array to avoid mutating state directly
              newChatList.push({
                chatElementVariant: ChatElementVariants.BASIC,
                chatBoxVariant: ChatBoxVariants.BASIC,
                element: {
                  content: "Who are you guys?",
                  aiResponse: false,
                  type: true,
                },
              });
              setChatList(newChatList);
              setShowChatBox(false);
              showAbout.current = true;
            }}
          >
            About
          </Button>
          <Button
            onClick={() => {
              const newChatList = [...chatList]; // Create a new array to avoid mutating state directly
              newChatList.push({
                chatElementVariant: ChatElementVariants.BASIC,
                chatBoxVariant: ChatBoxVariants.BASIC,
                element: {
                  content: "How should I contact you?",
                  aiResponse: false,
                  type: true,
                },
              });
              setChatList(newChatList);
              setShowChatBox(false);
              showContact.current = true;
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
