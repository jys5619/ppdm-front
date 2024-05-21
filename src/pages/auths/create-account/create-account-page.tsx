import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { createAccountClass, errorClass, formClass, mainClass } from "./create-account-page.css";
import { Link } from "react-router-dom";
// 비밀번호 조건 정규표현식
//const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$&*?!%])[A-Za-z\d!@$%&*?]{8,15}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,15}$/;
// /^ : 정규표현식 시작
// (?= ... ) : 전방탐색A
// (?=.*[a-zA-Z]) : 적어도 하나의 영문 대/소문자
// (?=.*\d) : 적어도 하나의 숫자
// (?=.*[@$&*?!%]) : 적어도 하나의 특수문자(~!@#$%^&*)
// [A-Za-z\d!@$%&*?] {8, 15} : 총 8자 이상 ~ 15자 이하의 영문 대/소문자, 숫자, 특수문자로 이루어진 문자열
// $/ : 정규표현식 끝

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
      .regex(passwordRegex, {
        message: "영문, 숫자를 조합해 주세요.",
      }),
    confirmPassword: z.string().nonempty({ message: "비밀번호를 재입력해 주세요." }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

type FormFields = z.infer<typeof schema>;

export function CreateAccountPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      name: "홍길동",
      email: "example@test.com",
      password: "aaaa1111",
      confirmPassword: "aaaa1111",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async data => {
    try {
      console.log(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      throw new Error("");
    } catch (e) {
      setError("root", { message: "사용자 정보가를 정확히 입력 하십시오." });
    }
  };
  return (
    <main className={mainClass}>
      <form onSubmit={handleSubmit(onSubmit)} className={formClass}>
        <h1>회원가입</h1>
        <input
          {...register("name")}
          type="text"
          placeholder="이름"
          required={true}
          autoComplete="name"
        />
        <small className={errorClass}>{errors?.name?.message}</small>
        <input {...register("email")} type="text" placeholder="이메일" autoComplete="email" />
        <small className={errorClass}>{errors?.email?.message}</small>
        <input {...register("password")} type="password" placeholder="패스워드" />
        <input {...register("confirmPassword")} type="password" placeholder="패스워드확인" />
        <small className={errorClass}>{errors?.confirmPassword?.message}</small>
        <small className={errorClass}>{errors?.root?.message}</small>
        <button type="submit">{isSubmitting ? "처리중..." : "계정 생성"}</button>
      </form>

      <div className={createAccountClass}>
        이미 계정을 가지고 계십니까? <Link to="/login">로그인 &rarr;</Link>
      </div>
    </main>
  );
}
