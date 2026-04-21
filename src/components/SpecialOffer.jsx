import InlineSVG from "react-inlinesvg";
import PropTypes from "prop-types";
import cn from "classnames";

const SpecialOffer = ({ image, size = "md", discount, title, className }) => (
  <div className={cn("rounded-lg lg:rounded-2xl relative ", className)}>
    <div className={cn(
      "absolute top-[60%] right-0 bottom-0 left-0",
      "rounded-b-2xl opacity-90",
      "bg-gradient-to-b from-transparent from-15%",
      "via-black/90 via-[63%]",
      "to-black to-100%"
    )} />
    <img src={`/images/home/special-offers/${image}.jpg`}
         alt={title}
         className="w-full h-auto rounded-2xl"
    />
    <div className="absolute top-0 left-3 lg:left-4">
      <InlineSVG src="/shapes/discount-shape.svg"
                 className="w-6 sm:w-10 lg:w-14 h-auto [&>*]:fill-ac-tint-700"
      />
      <div className={cn(
        "flex flex-col absolute top-0 sm:top-1 lg:top-2 left-0",
        "right-0 lg:-mr-0.5"
      )}>
        <span className={cn(
          "w-full caption-4 sm:body-3 lg:body-1 text-white",
          "text-center lg:-mr-px"
        )}>
          { discount + "%" }
        </span>
        <span className={cn(
          "w-full caption-4 sm:body-3 lg:body-1 text-white",
          "text-center -mt-1 lg:mt-0"
        )}>
          OFF
        </span>
      </div>
    </div>
    <h4 className={cn(
      "caption-1 sm:heading-6 lg:heading-3 text-ac-tint-300 absolute",
      "right-4 lg:right-8 bottom-2",
      size === "md" ? "lg:bottom-6" : "lg:bottom-9"
    )}>
      { title }
    </h4>
  </div>
);

SpecialOffer.propTypes = {
  discount: PropTypes.number,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["md", "lg"]),
  className: PropTypes.string
}

export default SpecialOffer;