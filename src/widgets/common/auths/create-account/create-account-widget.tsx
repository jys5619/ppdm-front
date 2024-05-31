import { useCreateAccountWidgetAction } from "./action/create-account-widget.action";
import { errorClass, errorRootClass, formClass } from "./css/create-account-widget.css";
import { CreateAccountWidgetProps } from "./prop/create-account-widget.prop";

export function CreateAccountWidget(props: CreateAccountWidgetProps) {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } =
    useCreateAccountWidgetAction(props);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
      {props.title && <h1>{props.title}</h1>}
      {errors.root && <small className={errorRootClass}>{errors.root.message}</small>}
      <input
        {...register("name")}
        type="text"
        placeholder="이름"
        autoComplete="name"
        disabled={isSubmitting}
      />
      {errors.name && <small className={errorClass}>{errors.name.message}</small>}
      <input
        {...register("email")}
        type="text"
        placeholder="이메일"
        autoComplete="email"
        disabled={isSubmitting}
      />
      {errors.email && <small className={errorClass}>{errors.email.message}</small>}
      <input
        {...register("password")}
        type="password"
        placeholder="패스워드"
        disabled={isSubmitting}
      />
      <input
        {...register("confirmPassword")}
        type="password"
        placeholder="패스워드확인"
        disabled={isSubmitting}
      />
      {errors.password && <small className={errorClass}>{errors.password.message}</small>}
      <button type="submit" aria-busy={isSubmitting}>
        {isSubmitting || "계정 생성"}
      </button>
    </form>
  );
}
