import { Controller } from "react-hook-form";
import { ControlProps } from "../common";

interface InputProps extends ControlProps {
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export const Input = ({
  control,
  name,
  placeholder,
  type = "text",
  disabled = false,
  readOnly = false,
}: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <input
            {...field}
            type={type}
            className={fieldState.invalid ? "error" : ""}
            disabled={disabled}
            readOnly={readOnly}
            placeholder={placeholder}
          />
          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
  );
};
