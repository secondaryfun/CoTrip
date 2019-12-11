import React from "react";
import { storiesOf } from "@storybook/react";
import ProfilePicture from "./ProfilePicture.js";
import Image from "../../assets/images/profile_large.png";

storiesOf("ProfilePicture", module)
  .add("Extra Small with Link", () => <ProfilePicture type="extra-small" link="#" image={Image} />)
  .add("Small with Link", () => <ProfilePicture type="small" link="#" image={Image} />)
  .add("Medium with Link", () => <ProfilePicture link="#" image={Image} />)
  .add("Large with Link", () => <ProfilePicture type="large" link="#" image={Image} />)
  .add("Extra-Small Static", () => <ProfilePicture type="extra-small" image={Image} />)
  .add("Small Static", () => <ProfilePicture type="small" image={Image} />)
  .add("Medium Static", () => <ProfilePicture image={Image} />)
  .add("Large Static", () => <ProfilePicture type="large" image={Image} />);