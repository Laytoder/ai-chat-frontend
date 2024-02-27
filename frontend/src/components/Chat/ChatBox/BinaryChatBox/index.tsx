import ChatButton from "../../ChatButton";

const BinaryChatBox = ({
  onSubmit,
  className,
}: {
  onSubmit: (message: string) => void;
  className?: String;
}) => {
  return (
    <div className={`${className} flex ml-10`}>
      <ChatButton
        label={"YES"}
        className="px-4 py-2"
        onClick={() => onSubmit("YES")}
      />
      <div style={{ width: "10px" }} />
      <ChatButton
        label={"NO"}
        className="px-4 py-2"
        onClick={() => onSubmit("NO")}
      />
    </div>
  );
};

export default BinaryChatBox;
