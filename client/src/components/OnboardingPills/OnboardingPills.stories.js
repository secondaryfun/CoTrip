import React from "react";
import { storiesOf } from "@storybook/react";
import OnboardingPills from "./OnboardingPills";

function onChange(val) {
  console.log(val);
}
storiesOf("Atoms/OnboardingPills", module).add("Default", () => (
  <OnboardingPills onChange={onChange} />
));
