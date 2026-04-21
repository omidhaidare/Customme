import InlineSVG from "react-inlinesvg";
import cn from "classnames";
import PropTypes from "prop-types"

const TypographyLogo = ({ className }) => {
    return (
        <InlineSVG src="/logos/typography.svg"
                   className={cn("h-[3.125rem] w-auto", className)} />
    );
}

TypographyLogo.propTypes = {
    className: PropTypes.string
}

export default TypographyLogo;