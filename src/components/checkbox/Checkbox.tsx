import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./Checkbox.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
};

const Checkbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className, spanClassName,
        children,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeChecked) {
            onChangeChecked(e.currentTarget.checked)
        }
        if (onChange) {
            onChange(e)
        }
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ""}`;

    return (
        <label>
            <input
                type={"checkbox"}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    );
}

export default Checkbox;
