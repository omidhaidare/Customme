import PropTypes from 'prop-types';
import { Field as FormikField } from "formik";
import cn from "classnames";

const Field = ({ name, as, error, className, children, ...rest }) => {

    return (
        <FormikField as={as}
                     id={name}
                     name={name}
                     className={cn(
                         "p-3 body-5 rounded-lg",
                         "border border-gray-900 hover:border-gray-900 focus:border-black",
                         error ? "border-error" : "border-gray-500",
                         className
                     )}
                     {...rest}
        >
            { children }
        </FormikField>
    )
}

Field.propTypes = {
    name: PropTypes.string.isRequired,
    as: PropTypes.oneOf(["input", "select", "textarea"]).isRequired,
    error: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
}
export default Field