import { Heading3, Heading1, Paragraph } from "../ui/headings";
import {
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  IconButton,
  DisabledButton,
} from "../ui/buttons";
import { CircleCard } from "../ui/circle-card";
import { ConnectionCard } from "../ui/connection-card";
import SearchInput from "../ui/input";
import Divider from "../ui/divider";

export default function designSystem() {
  return (
    <main className="w-full flex flex-col items-center space-y-4 my-8">
      <Heading1 text="Design System" />
      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Divider text="Inputs" />
        <Heading3 text="Search input" />
        <Paragraph text="Usage: Search input field" />
        <SearchInput />
      </div>
      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Divider text="Buttons" />
        <Heading3 text="Primary button" />
        <Paragraph text="Usage: Submit, SignUp, Send Message, Create Circle" />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Heading3 text="Secondary button" />
        <Paragraph text="Usage: Back, Cancel, Edit Profile" />
        <SecondaryButton>Cancel</SecondaryButton>
      </div>

      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Heading3 text="Ghost button" />
        <Paragraph text="Usage: Skip, Learn more" />
        <GhostButton>Skip</GhostButton>
      </div>

      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Heading3 text="Icon button" />
        <Paragraph text="Usage: Add a connection" />
        <IconButton>Skip</IconButton>
      </div>

      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Heading3 text="Disabled button" />
        <Paragraph text="Usage: for conditional rendering" />
        <DisabledButton>Submit</DisabledButton>
      </div>

      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Divider text="Cards" />
        <Heading3 text="Circle Card" />
        <Paragraph text="Usage: for connection circles" />
        <CircleCard text="Family" bgColor={"blue"} />
      </div>

      <div className="py-8 w-full flex flex-col items-center space-y-4">
        <Heading3 text="Contact Card" />
        <Paragraph text="Usage: for connections" />
        <ConnectionCard text="Magdalena Karpinska" />
      </div>
    </main>
  );
}
