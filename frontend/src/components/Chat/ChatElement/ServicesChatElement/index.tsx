import { useContext, useRef } from "react";
import ServiceCard from "./ServiceCard";
import AppContext from "../../../../AppContext";

const services = [
  {
    name: "Chatbot Development",
    description:
      "Craft intelligent chatbots tailored to your business needs, enhancing customer engagement and streamlining communication processes.",
  },
  {
    name: "Automated Workflows",
    description:
      "Design and implement seamless automated workflows to optimize business operations, increase efficiency, and reduce manual tasks.",
  },
  {
    name: "Enterprise Consulting with Generative AI",
    description:
      "Leverage the power of generative AI for comprehensive enterprise consulting, providing innovative solutions to complex challenges and driving digital transformation.",
  },
];

const ServicesChatElement = ({
  onFinishTyping,
}: {
  onFinishTyping: () => void;
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const cardsTyped = Array(services.length).fill(false);
  const { showServices } = useContext(AppContext);
  return (
    <div ref={elementRef} className="mt-10 laptop:mt-30 p-2 laptop:p-0">
      {/* <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1> */}
      <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            name={service.name}
            description={service.description}
            onFinishTyping={() => {
              cardsTyped[index] = true;
              const allTrue: boolean = cardsTyped.every(
                (value) => value === true
              );
              if (allTrue) {
                showServices.current = false;
                onFinishTyping();
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesChatElement;
