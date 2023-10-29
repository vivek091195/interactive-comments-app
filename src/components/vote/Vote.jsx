import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusSvg } from "../../assets/icons/minus.svg";
import "./Vote.css";
import { COLORS } from "../../typography/colors";

const Vote = ({ id, score, updateCommentCount }) => {
  const upVoteHandler = () => {
    updateCommentCount(id, score + 1);
  };

  const downVoteHandler = () => {
    updateCommentCount(id, score - 1);
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
        {score}
      </div>
      <div className="icon downvote" onClick={downVoteHandler}>
        <MinusSvg />
      </div>
    </div>
  );
};

Vote.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  updateCommentCount: PropTypes.func,
};

Vote.defaultProps = {
  score: 0,
};

export { Vote };
