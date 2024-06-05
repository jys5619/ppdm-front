import { z } from "zod";
import Constants from "@/shared/contants/constants";
import { CreateAccountWidgetProps } from "./create-account-widget.prop";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    name: z
      .string()
      .min(2, { message: "2자리 이상 입력해 주세요." })
      .max(40, { message: "40자리 이하 입력해 주세요." }),
    email: z.string().email({ message: "이메일을 올바르게 입력해 주세요." }),
    password: z
      .string()
      .min(8, { message: "8자리 이상 입력해 주세요." })
      .max(15, { message: "15자리 이하 입력해 주세요." })
      .regex(Constants.PASSWORD_REGEX, {
        message: "영문, 숫자를 조합해 주세요.",
      }),
    confirmPassword: z.string().min(1, { message: "비밀번호를 재입력해 주세요." }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type CreateAccountFormFields = z.infer<typeof schema>;

export function useCreateAccountWidgetForm(props: CreateAccountWidgetProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<CreateAccountFormFields>({
    defaultValues: {
      name: props.name,
      email: props.email,
      password: props.password,
      confirmPassword: props.password,
    },
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, setError, errors, isSubmitting };
}
