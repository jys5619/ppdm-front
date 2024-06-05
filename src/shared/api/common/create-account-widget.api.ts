import request from "@/app/axios/axios.config";

export async function createAccount(name: string, email: string, password: string) {
  return await request.post("/auths/signup", { user: { name, email, password } });
}
