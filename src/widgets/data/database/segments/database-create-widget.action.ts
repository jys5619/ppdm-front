import { SubmitHandler } from "react-hook-form";
import { DatabaseCreateWidgetProps } from "./database-create-widget.prop";
import {
  DatabaseCreateFormFields,
  useDatabaseCreateWidgetForm,
} from "./database-create-widget.form";
import { useState } from "react";
import { DatabaseVo } from "@/shared/vo/data";
import { connectionTest, createDatabase } from "@/shared/api/data";

export function useDatabaseCreateWidgetAction(props: DatabaseCreateWidgetProps) {
  const { control, handleSubmit, setError, watch, reset, errors } =
    useDatabaseCreateWidgetForm(props);
  const [successMessage, setSuccessMessage] = useState<string | undefined>();

  const onConnectionTest = async (data: DatabaseVo) => {
    try {
      const res = await connectionTest({ ...data });
      if (res.data) {
        setSuccessMessage(res.data);
      }
    } catch (e) {
      setError("root", { message: "오류가 발색하였습니다." });
    }
  };

  const onSubmit: SubmitHandler<DatabaseCreateFormFields> = async (data: DatabaseVo) => {
    try {
      const res = await createDatabase({ ...data });
      if (res.data && res.data.id) {
        // setValue('id', res.data.id)
        reset({ ...res.data });
        setSuccessMessage("저장 성공하였습니다.");
      } else {
        setError("root", { message: "저장에 실패하였습니다." });
      }
    } catch (e) {
      setError("root", { message: "오류가 발색하였습니다." });
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    watch,
    successMessage,
    onSubmit,
    onConnectionTest,
  };
}
