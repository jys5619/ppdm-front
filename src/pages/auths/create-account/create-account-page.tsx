import { createAccountClass, mainClass } from "./create-account-page.css";
import { Link } from "react-router-dom";
import { CreateAccountWidget } from "@widgets/common/auths/create-account/create-account-widget";

export function CreateAccountPage() {
  return (
    <main className={mainClass}>
      <CreateAccountWidget
        title="회원가입"
        name="홍길동"
        email="example@test.com"
        password="aaaa1111"
        isShowRememberMe={true}
      />

      <div className={createAccountClass}>
        이미 계정을 가지고 계십니까? <Link to="/login">로그인 &rarr;</Link>
      </div>
    </main>
  );
}
