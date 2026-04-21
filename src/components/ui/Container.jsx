import { createElement } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const Container = ({ tag, containerClassName, wrapperClassName, children }) => {
  return createElement(
    tag,
    {
      className: cn("py-3 lg:py-7 px-5 lg:px-6", containerClassName),
    },
    <div className={cn("container mx-auto", wrapperClassName)}>
      { children }
    </div>
  );
}

Container.propTypes = {
  tag: PropTypes.oneOf(
    ["nav", "header", "section", "footer", "div"]
  ).isRequired,
  containerClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Container;