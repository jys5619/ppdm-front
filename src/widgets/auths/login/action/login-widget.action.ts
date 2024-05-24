import { SubmitHandler } from "react-hook-form";
import { LoginFormFields, useLoginWidgetForm } from "../form/login-widget.form";
import { LoginWidgetProps } from "../prop/login-widget.prop";
import { useAppSetting, useAuths, useMenus } from "@/shared/store";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "@/shared/store/user-info.store";
import { login } from "../api/login-widget.api";

export function useLoginWidgetAction(props: LoginWidgetProps) {
  const { register, handleSubmit, setError, errors, isSubmitting, isRemember } =
    useLoginWidgetForm(props);
  const auths = useAuths();
  const { setUserEmail } = useAppSetting();
  const { setUserInfo } = useUserInfo();
  const navigate = useNavigate();
  const { setMenus } = useMenus();

  const onSubmit: SubmitHandler<LoginFormFields> = async formData => {
    try {
      const {
        data: { access_token, user, menus },
      } = await login(formData);

      if (formData.remember !== undefined && formData.remember !== null) {
        setUserEmail(formData.remember ? formData.email : "");
      }
      setUserInfo(user);
      setMenus(menus);
      auths.login(access_token);
      navigate("/");
    } catch (e) {
      setError("root", { message: "사용자 정보를 정확히 입력 하십시오." });
    }
  };

  return {
    register,
    handleSubmit,
    setError,
    errors,
    isSubmitting,
    onSubmit,
    isRemember,
  };
}
