import React from "react";
import "./InteractionCard.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Button from "../Button/Button";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

// Function based React Component

const InteractionCard = props => {
  // Default Class to apply to Component
  return (
    <div className="InteractionCard">
      <ProfilePicture to={props.to} image={props.image} />
      <Button text="Connect" color="pink" size="small" onClick={props.handleClick} />
      <Button text="Message" color="outline" size="small" onClick={props.handleClick} />
    </div>
  );
};

export default InteractionCard;
