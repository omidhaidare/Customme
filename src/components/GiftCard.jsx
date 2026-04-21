import PropTypes from "prop-types";
import cn from "classnames";
import LinkButton from "./ui/LinkButton";

const GiftCard = ({ image, title, link }) => (
  <div className="w-full lg:w-1/2 bg-ac-tint-300 flex justify-between rounded-2xl">
    <div className={cn("flex flex-col items-center justify-between md:justify-center",
        "gap-y-1 md:gap-y-6 py-2 pl-2 pr-4 px-4 lg:p-6")}
    >
      <h4 className="body-5 md:heading-4 text-gray-950">{ title }</h4>
      <LinkButton variant="outline"
                  size="sm"
                  text="دیدن محصولات"
                  className="md:self-start"
                  href={link} />
    </div>
    <img src={`/images/home/${image}`}
         alt={title}
         className={cn("w-2/5 md:w-1/2 max-h-24 md:max-h-48 h-full object-cover object-center",
             "rounded-2xl lg:rounded-r-none"
         )}
    />
  </div>
);

GiftCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default GiftCard;