import {
  PrimaryButton,
  SecondaryButton,
  GhostButton,
  IconButton,
  DisabledButton,
} from "../ui/button";
import { typography } from "../ui/typography";

export default function designSystem() {
  return (
    <div>
      <h1 className={typography.h1}>Design System</h1>
      <h2 className={typography.h2}>Buttons</h2>
      <h3 className={typography.h3}>Primary button</h3>
      <p className={typography.body}>
        Usage: Submit, SignUp, Send Message, Create Circle
      </p>
      <PrimaryButton>Submit</PrimaryButton>
      <h3 className={typography.h3}>Secondary button</h3>
      <p className={typography.body}>Usage: Back, Cancel, Edit Profile</p>
      <SecondaryButton>Cancel</SecondaryButton>
      <h3 className={typography.h3}>Ghost button</h3>
      <p className={typography.body}>Usage: Skip, Learn more</p>
      <GhostButton>Skip</GhostButton>
      <h3 className={typography.h3}>Icon button</h3>
      <p className={typography.body}>Usage: Add a connection</p>
      <IconButton>Skip</IconButton>
      <h3 className={typography.h3}>Disabled button</h3>
      <p className={typography.body}>Usage: for conditional rendering</p>
      <DisabledButton>Submit</DisabledButton>
    </div>
  );
}
