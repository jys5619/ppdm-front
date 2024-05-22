import { LoginWidget } from "@widgets/auths/login";
import { createAccountClass, mainClass } from "./login-page.css";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <main className={mainClass}>
      <LoginWidget
        title="로그인"
        email="example@test.com"
        password="aaaa1111"
        isShowRememberMe={true}
      />
      <div className={createAccountClass}>
        계정이 없습니까? <Link to="/create-account">계정 생성 &rarr;</Link>
      </div>
    </main>
  );
}
