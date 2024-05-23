import { SubmitHandler } from "react-hook-form";
import { LoginFormFields, useLoginWidgetForm } from "../form/login-widget.form";
import { LoginWidgetProps } from "../prop/login-widget.prop";
import { useAppSetting, useAuths } from "@/shared/store";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "@/shared/store/user-info.store";
import { login } from "../api/login-widget.api";
// import { useEffect, useRef } from "react";

export function useLoginWidgetAction(props: LoginWidgetProps) {
  const { register, handleSubmit, setError, errors, isSubmitting, isRemember } =
    useLoginWidgetForm(props);
  const auths = useAuths();
  const { setUserEmail } = useAppSetting();
  const { setUserInfo } = useUserInfo();
  const navigate = useNavigate();

  // const emailInput = useRef<HTMLInputElement>(null);
  // const passwordInput = useRef<HTMLInputElement>(null);

  /**
   * Input Focus 처리
   */
  // useEffect(() => {
  //   if (!isRemember && emailInput.current) {
  //     emailInput.current.focus();
  //   } else if (isRemember && passwordInput.current) {
  //     passwordInput.current.focus();
  //   }
  // }, [isRemember]);

  const onSubmit: SubmitHandler<LoginFormFields> = async formData => {
    try {
      const {
        data: { access_token, user },
      } = await login(formData);

      console.log("LOGIN", formData);

      if (formData.remember !== undefined && formData.remember !== null) {
        setUserEmail(formData.remember ? formData.email : "");
      }
      setUserInfo(user);
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
