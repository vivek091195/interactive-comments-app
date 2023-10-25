import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusSvg } from "../../assets/icons/minus.svg";
import "./Vote.css";
import { COLORS } from "../../typography/colors";

const Vote = ({ id, score, voteClickHandler }) => {
  const [vote, setVote] = useState(score);

  const upVoteHandler = () => {
    setVote((prevCount) => {
      const updatedCount = prevCount + 1;
      voteClickHandler(updatedCount, id);
      return updatedCount;
    });
  };

  const downVoteHandler = () => {
    setVote((prevCount) => {
      const updatedCount = prevCount - 1;
      voteClickHandler(updatedCount, id);
      return updatedCount;
    });
  };

  return (
    <div
      className="upvote-wrapper"
      style={{ backgroundColor: COLORS.VERY_LIGHT_GRAY }}
    >
      <div className="icon upvote" onClick={upVoteHandler}>
        <PlusSvg />
      </div>
      <div className="count" style={{ color: COLORS.MODERATE_BLUE }}>
        {vote}
      </div>
      <div className="icon downvote" onClick={downVoteHandler}>
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
