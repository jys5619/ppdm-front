import request from "@/app/axios/axios.config";
import { QueryFormVo } from "@/shared/vo/data";
import { ActiveInactiveState } from "@/shared/vo/state";

export interface QueryFormListSearchVo {
  title?: string;
  state?: ActiveInactiveState;
}

export async function getQueryFormList(searchVo: QueryFormListSearchVo) {
  return await request.put<QueryFormVo[]>(`/query-form`, searchVo);
}

export async function getQueryForm(id: string) {
  return await request.get<QueryFormVo>(`/query-form/${id}`);
}

export async function createQueryForm(queryFormVo: QueryFormVo) {
  return await request.post<QueryFormVo>("/query-form", queryFormVo);
}
