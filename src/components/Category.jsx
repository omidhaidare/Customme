import PropTypes from "prop-types";

const Category = ({ title, image }) => (
  <div className="p-2 border border-gray-400 rounded-2xl">
    <img src={`/images/home/categories/${image}.png`}
         alt={title}
         className="min-w-[3.75rem] w-full h-auto mb-2"
    />
    <h4 className="text-gray-950 caption-3 lg:caption-1 text-center">
      { title }
    </h4>
  </div>
);

Category.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Category;