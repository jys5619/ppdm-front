import { SubmitHandler } from "react-hook-form";
import { LoginFormFields, useLoginWidgetForm } from "../form/login-widget.form";
import { login } from "../api/login-widget.api";
import { LoginWidgetProps } from "../prop/login-widget.prop";
import { useAuths } from "@/shared/store";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "@/shared/store/user-info.store";

export function useLoginWidgetAction(props: LoginWidgetProps) {
  const { register, handleSubmit, setError, errors, isSubmitting } = useLoginWidgetForm(props);
  const { setToken } = useAuths();
  const { setUserInfo } = useUserInfo();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormFields> = async data => {
    try {
      const {
        data: { access_token, user },
      } = await login(data);
      setToken(access_token);
      setUserInfo(user);
      navigate("/");
    } catch (e) {
      setError("root", { message: "사용자 정보를 정확히 입력 하십시오." });
    }
  };

  return { register, handleSubmit, setError, errors, isSubmitting, onSubmit };
}
