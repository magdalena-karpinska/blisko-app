import { Heading5 } from ".";
import { BsEnvelope } from "react-icons/bs";
import { TbUserEdit } from "react-icons/tb";

type CardProps = {
  text: string;
};

export function ConnectionCard({ text }: CardProps) {
  return (
    <div className="card bg-white text-primary-content w-full">
      <div className="card-body p-4 flex flex-row items-center justify-between">
        <Heading5 text={text} />
        <div className="flex space-x-4">
          <BsEnvelope />
        </div>
      </div>
    </div>
  );
}
