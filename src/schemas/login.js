import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, "نام کاربری حداقل باید از ۴ حرف تشکیل شده باشد.")
        .max(64, "نام کاربری حداکثر می تواند از ۶۴ حرف تشکیل شود.")
        .matches(
            /^[A-z0-9_\-.]+$/,
            "نام کاربری فقط می تواند شامل حروف بزرگ و کوچک لاتین, اعداد و کاراکتر های (.-ـ) باشد."
        )
        .required("نام کاربری اجباری است!"),

    password: yup
        .string()
        .required("رمزعبور اجباری است!"),
});

export { loginSchema };
