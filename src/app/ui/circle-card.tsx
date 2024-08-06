import { IconButton } from ".";

type CustomColors =
  | "primary"
  | "base-100"
  | "white"
  | "darkOrange"
  | "orange"
  | "lightOrange"
  | "lightBlue"
  | "blue"
  | "gray";

type CardProps = {
  text: string;
  bgColor: CustomColors;
};

export function CircleCard({ text, bgColor }: CardProps) {
  const bgColorClass = {
    primary: "bg-[#84A9CD]",
    "base-100": "bg-[#FFF9E6]",
    white: "bg-[#FFF]",
    darkOrange: "bg-[#FC9F66]",
    orange: "bg-[#FAC357]",
    lightOrange: "bg-[#FAE39C]",
    lightBlue: "bg-[#B8E0E3]",
    blue: "bg-[#97C5D8]",
    gray: "bg-[#D1D1D6]",
  }[bgColor];

  return (
    <div className={`card w-full ${bgColorClass}`}>
      <div className="card-body flex flex-row justify-between">
        <h2 className="card-title">{text}</h2>
        <IconButton />
      </div>
    </div>
  );
}
