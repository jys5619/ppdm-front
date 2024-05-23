import { errorClass, errorRootClass, formClass } from "./css/login-widget.css";
import { LoginWidgetProps } from "./prop/login-widget.prop";
import { useLoginWidgetAction } from "./action/login-widget.action";

export function LoginWidget(props: LoginWidgetProps) {
  const { register, handleSubmit, errors, isSubmitting, onSubmit, isRemember } =
    useLoginWidgetAction(props);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
      {props.title && <h1>{props.title}</h1>}
      {errors.root && <small className={errorRootClass}>{errors.root.message}</small>}
      <input
        {...register("email")}
        type="text"
        placeholder="이메일"
        autoComplete="email"
        disabled={isSubmitting}
        autoFocus={!isRemember}
      />
      {errors.email && <small className={errorClass}>{errors.email.message}</small>}
      <input
        {...register("password")}
        type="password"
        placeholder="패스워드"
        disabled={isSubmitting}
        autoFocus={isRemember}
      />
      {errors.password && <small className={errorClass}>{errors.password.message}</small>}
      <fieldset hidden={!props.isShowRememberMe}>
        <label htmlFor="remember">
          <input
            {...register("remember")}
            type="checkbox"
            role="switch"
            autoComplete="remember"
            disabled={isSubmitting}
          />
          이메일 저장하기
        </label>
      </fieldset>
      <button type="submit" aria-busy={isSubmitting}>
        {isSubmitting || "로그인"}
      </button>
    </form>
  );
}
