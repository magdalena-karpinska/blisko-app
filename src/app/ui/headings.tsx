type Props = {
  text: string;
};

export function PageHeading({ text }: Props) {
  return <h1 className="text-2xl font-medium">{text}</h1>;
}

export function Heading1({ text }: Props) {
  return <h1 className="text-4xl font-black">{text}</h1>;
}

export function Heading2({ text }: Props) {
  return <h2 className="text-4xl font-black">{text}</h2>;
}

export function Heading3({ text }: Props) {
  return <h3 className="text-2xl font-medium">{text}</h3>;
}

export function Paragraph({ text }: Props) {
  return <p className="text-base font-normal">{text}</p>;
}
