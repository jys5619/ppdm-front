import request from "@/app/axios/axios.config";
import { QueryFormVo } from "@/shared/vo/data";
import { DatabaseVo } from "@/shared/vo/data/database.vo";

export async function getQueryFormList() {
  return await request.get<QueryFormVo[]>(`/query-form`);
}

export async function getQueryForm(id: string) {
  return await request.get<DatabaseVo>(`/query-form/${id}`);
}

export async function createQueryForm(queryFormVo: QueryFormVo) {
  return await request.post<QueryFormVo>("/query-form", queryFormVo);
}
