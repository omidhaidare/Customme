import InlineSVG from "react-inlinesvg";
import cn from "classnames";
import PropTypes from "prop-types";

const IconLogo = ({ className }) => {
    return (
        <InlineSVG src="/logos/icon.svg"
                   className={cn(
                       "w-[3.125rem] h-[3.125rem] bg-black rounded-full",
                       "[&>:first-child]:fill-gray-950",
                       "[&>:last-child]:fill-ac-primary",
                       className
                   )} />
    );
}

IconLogo.propTypes = {
    className: PropTypes.string
}

export default IconLogo;