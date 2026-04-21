import { createElement } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import PropTypes from "prop-types";
import Icon from "./Icon";

const styles = {
    fill: {
        primary: cn(
            "bg-ac-primary border-transparent text-white [&>svg>*]:fill-white",
            "hover:bg-ac-shade-600",
            "disabled:bg-ac-tint-200 disabled:text-ac-tint-500",
            "[&>svg>*]:disabled:fill-ac-tint-500"
        ),
        gray: cn(
            "bg-gray-900 border-transparent text-white [&>svg>*]:fill-white",
            "hover:bg-gray-950",
            "disabled:bg-gray-300 disabled:text-gray-600",
            "[&>svg>*]:disabled:fill-gray-600"
        )
    },
    outline: {
        primary: cn(
            "border-ac-primary text-ac-primary [&>svg>*]:fill-ac-primary",
            "hover:border-ac-shade-600 hover:text-ac-shade-600",
            "[&>svg>*]:hover:fill-ac-shade-600",
            "disabled:border-ac-tint-500 disabled:text-ac-tint-500",
            "[&>svg>*]:disabled:fill-ac-tint-500"
        ),
        gray: cn(
            "border-gray-900 text-gray-900 [&>svg>*]:fill-gray-900",
            "hover:border-gray-950 hover:text-gray-950 [&>svg>*]:hover:fill-gray-950",
            "disabled:border-gray-600 disabled:text-gray-600",
            "[&>svg>*]:disabled:fill-gray-600"
        )
    },
    text: {
        primary: cn(
            "text-ac-primary border-transparent [&>svg>*]:fill-ac-primary",
            "hover:text-ac-shade-600 [&>svg>*]:hover:fill-ac-shade-600",
            "disabled:text-ac-tint-500 [&>svg>*]:disabled:fill-ac-tint-500"
        ),
        gray: cn(
            "text-gray-900 border-transparent [&>svg>*]:fill-gray-900",
            "hover:text-gray-950 [&>svg>*]:hover:fill-gray-950",
            "disabled:text-gray-600 [&>svg>*]:disabled:fill-gray-600"
        )
    }
}

const sizes = {
    sm: "py-2 px-3 caption-4",
    md: "py-2 px-6 button-2",
    lg: "py-3 px-6 button-2"
}

const LinkButton = ({
                        variant = "fill",
                        color = "primary",
                        size = "lg",
                        leftIcon,
                        rightIcon,
                        text,
                        href,
                        disabled,
                        className,
                        ...rest
                    }) => createElement(
    href ? Link : "button",
    {
        className: cn(
            "flex items-center justify-center gap-x-1",
            "border rounded-lg",
            styles[variant][color],
            size !== "custom" && sizes[size],
            disabled && "cursor-not-allowed",
            className
        ),
        type: href ? undefined : "button",
        disabled: href ? undefined : disabled,
        to: href,
        ...rest
    },
    rightIcon && (
        <Icon name={rightIcon} size={size === "sm" ? "md" : "lg"} />
    ),
    text,
    leftIcon && (
        <Icon name={leftIcon} size={size === "sm" ? "md" : "lg"} />
    )
);

const props = {
    variant: PropTypes.oneOf(["fill", "outline", "text"]),
    color: PropTypes.oneOf(["primary", "gray"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "custom"]),
    rightIcon: PropTypes.string,
    leftIcon: PropTypes.string,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
}

LinkButton.propTypes = props;

export { props };

export default LinkButton;