import request from "@/app/axios/axios.config";
import { LoginFormFields } from "../form/login-widget.form";

export async function login(login: LoginFormFields) {
  return await request.post("/auths/signin", login);
}
