import PropTypes from "prop-types";
import cn from "classnames";
import Icon from "./ui/Icon";
import LinkButton, { props } from "./ui/LinkButton"

const Product = ({
  image, title, description, colors, favorite, price, btn
}) => (
  <div className={cn(
    "w-full flex flex-col items-stretch gap-y-4 p-4",
    "border border-gray-500 rounded-2xl",
  )}>
    <div className="h-48 sm:h-24 lg:h-64 w-full rounded-lg relative">
      <img src={`/images/products/${image}.jpg`}
           alt={title}
           className={cn(
             "h-48 sm:h-24 lg:h-64 w-full rounded-lg",
             "object-cover object-center"
           )}
      />
      <div className="flex flex-row-reverse absolute bottom-0 left-0">
        {
          colors && colors.map((color, index) => (
            <span key={color}
                  className={cn(
                    "h-3 lg:h-4 w-3 lg:w-4 rounded-full relative",
                    index !== 0 && "-ml-1",
                    color === "#FFFFFF" && "border border-gray-900",
                    color === "#000000" && "border border-white",
                  )}
                  style={{
                    backgroundColor: color,
                    zIndex: index,
                  }}
            />
          ))
        }
      </div>
    </div>
    <div className="flex flex-col gap-y-2.5">
      <h5 className={cn(
        "flex items-center justify-between",
        "caption-1 lg:heading-6 text-black"
      )}>
        { title }
        <Icon size="lg"
              name="heart"
              className={cn(
                "cursor-pointer",
                favorite
                  ? "[&>*]:fill-ac-primary [&>*]:stroke-ac-primary"
                  : [
                    "[&>*]:fill-transparent [&>*]:stroke-gray-900",
                    "[&>*]:hover:fill-ac-tint-400",
                    "[&>*]:hover:stroke-ac-tint-400"
                  ]
              )} />
      </h5>
      <p className="text-black caption-2 lg:body-4">{ description }</p>
    </div>
    {
      price && (
        <span className="caption-1 lg:heading-6 text-black self-end">
          { price.toLocaleString("fa-IR") + " " + "تومان" }
        </span>
      )
    }
    { btn && <LinkButton {...btn}  /> }
  </div>
);

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  favorite: PropTypes.bool,
  price: PropTypes.number,
  btn: PropTypes.shape(props)
}

export default Product;