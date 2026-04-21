import PropTypes from 'prop-types';
import { useField } from "formik";
import cn from "classnames";
import Field from "./Field";


const Group = ({ name, type, label, children }) => {

    const meta = useField(name)[1];
    const isError = meta.error && meta.touched;
    return (
        <div className="flex flex-col gap-y-1">
            <label htmlFor={name} className={cn("body-4", isError ? "text-error" : " text-gray-500")}>
                { label }
            </label>
            <Field name={name} as="input" type={type} error={isError} />
            {isError && <span className="caption-4 text-error">{ meta.error }</span>}
            {children}
        </div>
    )
}

Group.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.node
}

export default Group