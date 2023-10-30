import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusSvg } from "../../assets/icons/minus.svg";
import { Icon, Score, VoteWrapper } from "./Vote.style";

const Vote = ({ id, score, updateCommentCountHandler }) => {
  const upVoteHandler = () => {
    updateCommentCountHandler(id, score + 1);
  };

  const downVoteHandler = () => {
    updateCommentCountHandler(id, score - 1);
  };

  return (
    <VoteWrapper>
      <Icon onClick={upVoteHandler}>
        <PlusSvg />
      </Icon>
      <Score>{score}</Score>
      <Icon onClick={downVoteHandler}>
        <MinusSvg />
      </Icon>
    </VoteWrapper>
  );
};

Vote.propTypes = {
  id: PropTypes.number,
  score: PropTypes.number,
  updateCommentCountHandler: PropTypes.func,
};

Vote.defaultProps = {
  score: 0,
};

export { Vote };
