import React from "react";
import { CardWrapper } from "./Card.style";

const Card = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export { Card };
