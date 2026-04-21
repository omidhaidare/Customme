import { useFormikContext} from "formik";
import PropTypes from "prop-types";
import LinkButton from "../LinkButton.jsx";

const SubmitButton = ({ text}) => {

    const { isSubmitting } = useFormikContext()

    return (
        <LinkButton variant="fill"
                    color="primary"
                    text={isSubmitting ? "در حال فرستادن اطلاعات" : text || "ثبت"}
                    disabled={isSubmitting}
                    size="md"
                    type="submit"
        />

    )

}

SubmitButton.propTypes = {
    text: PropTypes.string,
}

export default SubmitButton