import { Formik, Form as FormikForm } from 'formik';
import PropTypes from 'prop-types';
import SubmitButton from "./SubmitButton";

const Form = ({ initialValues, onSubmit, className, validationSchema, submitButtonText, children }) => {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <FormikForm className={className}>
                {children}
                {submitButtonText && <SubmitButton text={submitButtonText} />}
            </FormikForm>
        </Formik>
    );
}

Form.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string,
    validationSchema: PropTypes.object.isRequired,
    submitButtonText: PropTypes.string,
    children: PropTypes.node
}

export default Form;
