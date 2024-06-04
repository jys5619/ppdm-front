import { Input, Select } from "@/shared/controlls";
import { QueryFormInputType, queryFormInputTypeList } from "@/shared/vo/type";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { QueryFormInputEntityProps } from "./prop/query-form-input-entity.prop";

export function QueryFormInputEntity(props: QueryFormInputEntityProps) {
  const { control, controlName, index, onChangeType, watchType, onUp, onDown, onRemove } = props;
  const name = `${controlName}.${index}.name`;
  const title = `${controlName}.${index}.title`;
  const type = `${controlName}.${index}.type`;
  const arrayData = `${controlName}.${index}.arrayData`;

  return (
    <div style={{ display: "flex" }}>
      <Input name={name} control={control} placeholder="변수명" />
      <Input name={title} control={control} placeholder="필드명" />
      <Select
        name={type}
        control={control}
        typeList={queryFormInputTypeList}
        onChange={onChangeType}
      />
      <Input
        name={arrayData}
        control={control}
        placeholder={watchType === QueryFormInputType.INPUT ? "" : "배열명"}
        disabled={watchType === QueryFormInputType.INPUT}
      />
      <div style={{ display: "flex" }}>
        <button type="button" onClick={onUp}>
          <FaArrowUp />
        </button>
        <button type="button" onClick={onDown}>
          <FaArrowDown />
        </button>
        <button type="button" onClick={onRemove}>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
}
