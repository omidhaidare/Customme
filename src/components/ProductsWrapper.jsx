import cn from "classnames";
import PropTypes from "prop-types";

const ProductsWrapper = ({ children }) => (
  <div className={cn(
    "grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    "2xl:grid-cols-5 gap-6 mt-6"
  )}>
    { children }
  </div>
);

ProductsWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProductsWrapper;