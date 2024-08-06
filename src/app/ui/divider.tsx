type DividerProps = {
  text: string;
};

export function Divider({ text }: DividerProps) {
  return <div className="divider text-1xl w-full">{text}</div>;
}
