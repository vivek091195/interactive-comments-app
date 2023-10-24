import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusSvg } from "../../assets/icons/minus.svg";
import "./Vote.css";
import { COLORS } from "../../typography/colors";

const Vote = ({ score }) => {
  const [vote, setVote] = useState(score);
  return (
    <div
      className="upvote-wrapper"
      style={{ backgroundColor: COLORS.VERY_LIGHT_GRAY }}
    >
      <div
        className="icon upvote"
        onClick={() => setVote((prevVote) => prevVote + 1)}
      >
        <PlusSvg />
      </div>
      <div className="count" style={{ color: COLORS.MODERATE_BLUE }}>
        {vote}
      </div>
      <div
        className="icon downvote"
        onClick={() => setVote((prevVote) => prevVote - 1)}
      >
        <MinusSvg />
      </div>
    </div>
  );
};

Vote.propTypes = {
  score: PropTypes.number,
};

Vote.defaultProps = {
  score: 0,
};

export { Vote };
