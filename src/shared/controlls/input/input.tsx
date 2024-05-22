import { useFormContext } from "react-hook-form";

export interface InputPorps {
  type: "text" | "number" | "email";
  field: string;
  placeholder?: string;
}
export function Input({ type, field, placeholder }: InputPorps) {
  const { register } = useFormContext();

  return (
    <>
      <input {...register(field)} type={type} placeholder={placeholder} />
    </>
  );
}
