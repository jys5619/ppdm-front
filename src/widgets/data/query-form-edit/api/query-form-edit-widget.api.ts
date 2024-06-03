import request from "@/app/axios/axios.config";
import { QueryFormVo } from "@/shared/vo/data";

export async function getQueryForm(id: string) {
  return await request.get<QueryFormVo>(`/query-form/${id}`);
}

export async function createQueryForm(queryFormVo: QueryFormVo) {
  return await request.post<QueryFormVo>("/query-form", queryFormVo);
}
