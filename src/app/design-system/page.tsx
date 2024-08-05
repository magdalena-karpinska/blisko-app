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

export default function designSystem() {
  return (
    <main className="w-full flex flex-col items-center space-y-4 my-8">
      <Heading1 text="Design System" />
      <Heading3 text="Buttons" />
      <Heading3 text="Primary button" />
      <Paragraph text="Usage: Submit, SignUp, Send Message, Create Circle" />
      <PrimaryButton>Submit</PrimaryButton>
      <Heading3 text="Secondary button" />
      <Paragraph text="Usage: Back, Cancel, Edit Profile" />
      <SecondaryButton>Cancel</SecondaryButton>
      <Heading3 text="Ghost button" />
      <Paragraph text="Usage: Skip, Learn more" />
      <GhostButton>Skip</GhostButton>
      <Heading3 text="Icon button" />
      <Paragraph text="Usage: Add a connection" />
      <IconButton>Skip</IconButton>
      <Heading3 text="Disabled button" />
      <Paragraph text="Usage: for conditional rendering" />
      <DisabledButton>Submit</DisabledButton>
      <Heading3 text="Circle Card" />
      <Paragraph text="Usage: for connection circles" />
      <CircleCard text="Family" bgColor={"blue"} />
      <Heading3 text="Contact Card" />
      <Paragraph text="Usage: for connections" />
      <ConnectionCard text="Magdalena Karpinska" />
      <Heading3 text="Input" />
      <Paragraph text="Usage: Search input field" />
      <SearchInput />
    </main>
  );
}
