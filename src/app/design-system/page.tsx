import {
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  IconButton,
  DisabledButton,
} from "../ui/button";

export default function designSystem() {
  return (
    <div>
      <h2>Buttons</h2>
      <h3>Primary button</h3>
      <p>Usage: Submit, SignUp, Send Message, Create Circle</p>
      <PrimaryButton>Submit</PrimaryButton>
      <h3>Secondary button</h3>
      <p>Usage: Back, Cancel, Edit Profile</p>
      <SecondaryButton>Cancel</SecondaryButton>
      <h3>Ghost button</h3>
      <p>Usage: Skip, Learn more</p>
      <GhostButton>Skip</GhostButton>
      <h3>Icon button</h3>
      <p>Usage: Add a connection</p>
      <IconButton>Skip</IconButton>
      <h3>Disabled button</h3>
      <p>Usage: for conditional rendering</p>
      <DisabledButton>Submit</DisabledButton>
    </div>
  );
}
