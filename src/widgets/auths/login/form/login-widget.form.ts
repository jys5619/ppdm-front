import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoginWidgetProps } from "../prop/login-widget.prop";
import { zodResolver } from "@hookform/resolvers/zod";
import constants from "@/shared/contants/constants";

const schema = z.object({
  email: z.string().email({ message: "이메일을 올바르게 입력해 주세요" }),
  password: z
    .string()
    .min(8, { message: "8자리 이상 입력해 주세요." })
    .max(15, { message: "15자리 이하 입력해 주세요." })
    .regex(constants.PASSWORD_REGEX, {
      message: "영문, 숫자를 조합해 주세요.",
    }),
  remember: z.boolean(),
});

export type LoginFormFields = z.infer<typeof schema>;

export function useLoginWidgetForm(props: LoginWidgetProps) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    defaultValues: {
      email: props.email,
      password: props.password,
      remember: true,
    },
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, setError, errors, isSubmitting };
}
