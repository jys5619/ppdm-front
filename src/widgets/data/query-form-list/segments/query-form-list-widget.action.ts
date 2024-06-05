import { SubmitHandler } from "react-hook-form";
import { QueryFormListWidgetProps } from "./query-form-list-widget.prop";
import { QueryFormListFormFields, useQueryFormListWidgetForm } from "./query-form-list-widget.form";
import { useState } from "react";
import { QueryFormVo } from "@/shared/vo/data";
import { AxiosError } from "axios";
import { QueryFormListSearchVo, getQueryFormList } from "@/shared/api/data";

export function useQueryFormListWidgetAction(props: QueryFormListWidgetProps) {
  const { control, form } = useQueryFormListWidgetForm(props);
  const [dataList, setDataList] = useState<QueryFormVo[]>([]);

  const onSubmit: SubmitHandler<QueryFormListFormFields> = async (
    searchVo: QueryFormListSearchVo
  ) => {
    try {
      const res = await getQueryFormList(searchVo);
      if (res.data) {
        setDataList(res.data);
      }
    } catch (e) {
      if (e instanceof AxiosError) {
        form.setError("root", { message: e.message });
      } else {
        form.setError("root", { message: "오류가 발색하였습니다." });
      }
    }
  };

  return {
    control,
    form,
    dataList,
    onSubmit,
  };
}
