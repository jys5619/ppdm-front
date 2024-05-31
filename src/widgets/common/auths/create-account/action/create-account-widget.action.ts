import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../api/create-account-widget.api";
import { CreateAccountWidgetProps } from "../prop/create-account-widget.prop";
import {
  CreateAccountFormFields,
  useCreateAccountWidgetForm,
} from "../form/create-account-widget.form";

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
