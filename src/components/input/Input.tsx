import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from "react";
import s from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperInputTextPropsType = DefaultInputPropsType & {
  onChangeText?: (value: string) => void
  onEnter?: () => void
  error?: string
  spanClassName?: string
  defaultValue?: string
};

const Input: React.FC<SuperInputTextPropsType> = (
    {
      type, onChange, defaultValue,
      onChangeText,
      onKeyPress, onEnter,
      error,
      className, spanClassName,

      ...restProps
    }
) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);

    onChangeText && onChangeText(e.currentTarget.value);
  }
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyPress && onKeyPress(e);

    e.key === 'Enter' && onEnter && onEnter()
  }

  const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ''}`;
  const finalInputClassName = `${s.superInput} ${error ? s.errorInput : s.superInput}`;

  return (
      <>
        <input
            type={type} // изменил на type был просто текст
            onChange={onChangeCallback}
            onKeyPress={onKeyPressCallback}
            className={finalInputClassName}
            defaultValue={defaultValue}

            {...restProps}
        />
        {error && <span className={finalSpanClassName}>{error}</span>}
      </>
  );
}

export default Input;
