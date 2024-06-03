import { activeInactiveStateList } from "@/shared/vo/state";
import { useQueryFormListWidgetAction } from "./action/query-form-list-widget.action";
import { formClass } from "./css/query-form-list-widget.css";
import { QueryFormListWidgetProps } from "./prop/query-form-list-widget.prop";
import { Input, Select } from "@/shared/controlls";

export function QueryFormListWidget(props: QueryFormListWidgetProps) {
  const { control, form, onSubmit, dataList } = useQueryFormListWidgetAction(props);

  return (
    <>
      <form onSubmit={form.handleSubmit(onSubmit)} className={formClass}>
        <Input name="title" control={control} type="text" />
        <Select
          name={"state"}
          control={control}
          typeList={activeInactiveStateList}
          showAll={true}
        />
        <button type="submit">조회</button>
      </form>
      <table style={{ border: "1px solid black", width: "100%" }}>
        <thead>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
        </thead>
        <tbody>
          {dataList.map(data => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.favorites}</td>
                <td>{data.state}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
