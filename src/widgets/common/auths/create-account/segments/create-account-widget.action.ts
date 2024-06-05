import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CreateAccountWidgetProps } from "./create-account-widget.prop";
import { CreateAccountFormFields, useCreateAccountWidgetForm } from "./create-account-widget.form";
import { createAccount } from "@/shared/api/common";

export function useCreateAccountWidgetAction(props: CreateAccountWidgetProps) {
  const { register, handleSubmit, setError, errors, isSubmitting } =
    useCreateAccountWidgetForm(props);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CreateAccountFormFields> = async data => {
    try {
      console.log(data);
      const result = await createAccount(data.name, data.email, data.password);
      console.log(result);
      navigate("/login");
    } catch (e) {
      setError("root", { message: "사용자 정보를 정확히 입력 하십시오." });
    }
  };

  return { register, handleSubmit, setError, errors, isSubmitting, onSubmit };
}
