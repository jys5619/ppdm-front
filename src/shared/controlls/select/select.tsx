import { Controller } from "react-hook-form";
import { ControlProps } from "../common";
import { ChangeEvent } from "react";

export interface OptionType {
  value: string;
  label: string;
}

interface SelectProps extends ControlProps {
  showAll?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  typeList?: string[] | OptionType[];
}

export const Select = ({ showAll, typeList, onChange, ...rest }: SelectProps) => {
  return (
    <Controller
      name={rest.name}
      control={rest.control}
      render={({ field, fieldState }) => (
        <>
          <select
            {...field}
            disabled={rest.disabled}
            onChange={e => onChange && onChange(e)}
            className={fieldState.invalid ? "error" : ""}
          >
            {showAll && <option value=""></option>}
            {typeList?.map(type => {
              let value = "";
              let label = "";
              if (typeof type === "string") {
                value = type;
                label = type;
              } else if (typeof type === "object") {
                value = type.value;
                label = type.label;
              }
              return (
                <option key={value} value={value}>
                  {label}
                </option>
              );
            })}
          </select>

          {fieldState.invalid && fieldState.error?.message && (
            <small>{fieldState.error?.message}</small>
          )}
        </>
      )}
    />
  );
};
