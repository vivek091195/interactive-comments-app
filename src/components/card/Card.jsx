import React from "react";
import { CardWrapper } from "./Card.style";

const Card = (props) => {
  const { noMargin, noPadding, children } = props;
  return (
    <CardWrapper noMargin={noMargin} noPadding={noPadding}>
      {children}
    </CardWrapper>
  );
};

export { Card };
