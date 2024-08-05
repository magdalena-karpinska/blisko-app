type DividerProps = {
  text: string;
};

export default function Divider({ text }: DividerProps) {
  return <div className="divider text-2xl">{text}</div>;
}
