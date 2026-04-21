import { Fragment } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import LinkButton from "./ui/LinkButton";

const Designer = ({ avatar, name, statistics, designs }) => (
  <div className="bg-white border border-gray-400 rounded-2xl">
    <div className="p-8 relative">
      <span className={cn(
        "h-1/2 bg-ac-tint-200 absolute top-0 left-0 right-0 z-[1]",
        "rounded-t-2xl"
      )} />
      <img src={`/images/profiles/${avatar}`}
           alt={name}
           className={cn(
             "w-20 h-20 rounded-full object-cover object-center mx-auto",
             "relative z-[2]"
           )}
      />
    </div>
    <div className="flex flex-col gap-y-4 px-2 pb-4">
      <h4 className="body-4 text-gray-950 text-center mb-2 -mt-2">{ name }</h4>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        {
          statistics.map(({ id, title, value }, index) => (
            <Fragment key={id}>
              <div className="flex flex-wrap items-center justify-center">
                <h6 className="text-gray-700 caption-4 whitespace-nowrap">
                  { title }
                  <span className="mx-0.5">:</span>
                </h6>
                <span className="text-gray-700 caption-4">{ value }</span>
              </div>
              {
                index !== statistics.length - 1 && (
                  <span className="hidden sm:inline-block text-gray-700 mx-2">
                    |
                  </span>
                )
              }
            </Fragment>
          ))
        }
      </div>
      <div className="flex items-center justify-center gap-x-1 sm:gap-x-3">
        {
          designs.map((design, index) => (
            <img key={design}
                 src={`/images/designs/${design}`}
                 alt={"طرخ شماره " + (index + 1).toLocaleString("fa-IR")}
                 className={cn(
                   "w-16 xl:w-20 h-16 xl:h-20 rounded-lg",
                   "border border-gray-500"
                 )}
            />
          ))
        }
      </div>
      <LinkButton variant="outline"
                  size="md"
                  text="دنبال کردن"
                  rightIcon="profile-add" />
    </div>
  </div>
);

Designer.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]).isRequired
  })).isRequired,
  designs: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Designer;