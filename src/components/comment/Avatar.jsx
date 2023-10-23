import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ src, alt, height, width }) => {
  return <img src={src} alt={alt} height={height} width={width} />;
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Avatar.defaultProps = {
  height: 30,
  width: 30,
};

export { Avatar };
