import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import { ReactComponent as MinusSvg } from "../../assets/icons/minus.svg";
import "./Vote.css";
import { COLORS } from "../../typography/colors";

const Vote = ({ voteCount }) => {
  return (
    <div
      className="upvote-wrapper"
      style={{ backgroundColor: COLORS.VERY_LIGHT_GRAY }}
    >
      <div className="icon upvote">
        <PlusSvg />
      </div>
      <div className="count" style={{ color: COLORS.MODERATE_BLUE }}>
        {voteCount}
      </div>
      <div className="icon downvote">
        <MinusSvg />
      </div>
    </div>
  );
};

Vote.propTypes = {
  voteCount: PropTypes.number,
};

Vote.defaultProps = {
  voteCount: 0,
};

export { Vote };
