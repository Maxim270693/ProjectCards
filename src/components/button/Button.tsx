import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    error?: boolean | string
}

const Button: React.FC<SuperButtonPropsType> = (
    {
        error, className,
        ...restProps
    }
) => {
    const finalClassName = `${error ? s.error : s.myButton} ${className}`;

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    );
}

export default Button;
