import cls from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { type InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  autofocus?: boolean;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    children,
    type = "text",
    value,
    placeholder,
    autofocus,
    onChange,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const ref = useRef<HTMLInputElement>();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart);
  };

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])} {...otherProps}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          className={cls.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
        />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
