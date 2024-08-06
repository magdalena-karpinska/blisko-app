type DividerProps = {
  text: string;
};

export function Divider({ text }: DividerProps) {
  return <div className="divider text-2xl">{text}</div>;
}
