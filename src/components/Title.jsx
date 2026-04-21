import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "./ui/Icon";
import LinkButton from "./ui/LinkButton";

const Title = ({ icon, text, link }) => (
  <h2 className={cn(
    "flex justify-between md:justify-start items-center gap-x-2",
    "caption-1 lg:heading-4 text-gray-950 mb-6"
  )}>
    <Icon size="2xl" name={icon} className="hidden md:inline-block" />
    { text }
    <span className={cn(
      "hidden md:inline-block h-px flex-1 bg-gray-400 rounded-md",
      "mr-8 ml-2 mt-2"
    )} />
    {
      link && (
        <LinkButton href={link.to} size="md" variant="text" text={link.text} />
      )
    }
  </h2>
);

Title.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.exact({
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  })
}

export default Title;