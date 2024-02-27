type AlchemyProps = {
  opacity?: number;
  strokeColor?: string;
  strokeWidth?: number;
  scale?: number;
};

const Alchemy = ({
  opacity = 0.71,
  strokeColor = "#fff",
  strokeWidth = 7,
  scale = 1,
}: AlchemyProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Alchemy"
    viewBox="0 0 247.13 247.65"
    width={60 * scale}
    height={60 * (247.65 / 247.13) * scale}
  >
    <path
      d="M76.78 239.14V8.55l161.9 162.82-225.61-.91L173.21 8.55l-.88 225.61L8.65 74.9l230.03.89-161.9 163.35z"
      data-name="Layer 1"
      style={{
        fill: "none",
        opacity: opacity,
        stroke: strokeColor,
        strokeMiterlimit: 10,
        strokeWidth: strokeWidth,
      }}
    />
  </svg>
);

export default Alchemy;
