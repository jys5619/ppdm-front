import { dbTypeList } from "@/shared/vo/type/db-type";
import { useDatabaseCreateWidgetAction } from "./segments/database-create-widget.action";
import { errorClass, errorRootClass, formClass } from "./segments/database-create-widget.css";
import { DatabaseCreateWidgetProps } from "./segments/database-create-widget.prop";
import { activeInactiveStateList } from "@/shared/vo/state";
import { Input, Select, Textarea } from "@/shared/controlls";
import styled from "styled-components";

export function DatabaseCreateWidget(props: DatabaseCreateWidgetProps) {
  const { control, handleSubmit, errors, watch, successMessage, onSubmit, onConnectionTest } =
    useDatabaseCreateWidgetAction(props);

  const database = watch();

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={formClass}>
      <Table>
        <Row>
          <Label>Database Type</Label>
          <Control>
            <Select
              name="dbType"
              control={control}
              typeList={dbTypeList}
              disabled={!!database.id}
            />
            {errors.dbType && <small className={errorClass}>{errors.dbType.message}</small>}
          </Control>
        </Row>
        <Row>
          <Label>Database Name</Label>
          <Control>
            <Input
              name="dbName"
              control={control}
              type="text"
              placeholder="Database명(사용자들이 확인할 수 있도록 화면에 출력되는 값 중복 불가)"
            />
          </Control>
        </Row>
        <Row>
          <Label>Connection String</Label>
          <Control>
            <Input
              name="connectString"
              control={control}
              type="text"
              placeholder="Database 연결 문자열 예)localhot:1521/ORCL"
            />
          </Control>
        </Row>
        <Row>
          <Label>Database ID</Label>
          <Control>
            <Input name="username" control={control} type="text" placeholder="Database ID" />
          </Control>
        </Row>
        <Row>
          <Label>Database 패스워드</Label>
          <Control>
            <Input name="password" control={control} type="text" placeholder="Database 패스워드" />
          </Control>
        </Row>
        <Row>
          <Label>Pool Min Count</Label>
          <Control>
            <Input
              name="poolMin"
              control={control}
              type="number"
              placeholder="Connection Pool Min Count"
            />
          </Control>
        </Row>
        <Row>
          <Label>Pool Max Count</Label>
          <Control>
            <Input
              name="poolMax"
              type="number"
              control={control}
              placeholder="Connection Pool Max Count"
            />
          </Control>
        </Row>
        <Row>
          <Label>Connection Timeout(초)</Label>
          <Control>
            <Input
              name="timeout"
              type="number"
              control={control}
              placeholder="Connection Timeout"
            />
          </Control>
        </Row>
        <Row>
          <Label>사용자에게 보여줄 DB정보</Label>
          <Control>
            <Textarea
              control={control}
              name="dbInfo"
              placeholder="사용자에게 보여줄 정보"
              style={{ width: "100%" }}
              rows={10}
            />
          </Control>
        </Row>
        <Row>
          <Label>사용자에게 보여줄 DB정보</Label>
          <Control>
            <Select name="state" control={control} typeList={activeInactiveStateList} />
          </Control>
        </Row>
      </Table>

      {successMessage && <small>{successMessage}</small>}
      {errors.root && <small className={errorRootClass}>{errors.root.message}</small>}
      <button type="submit" onClick={() => onConnectionTest(database)}>
        연결 테스트
      </button>
    </Form>
  );
}
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Table = styled.form`
  border-top: 1px solid ${props => props.theme.colors.colorDarkGray};
  border-left: 1px solid ${props => props.theme.colors.colorDarkGray};
  border-right: 1px solid ${props => props.theme.colors.colorDarkGray};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.colorDarkGray};
  display: flex;
`;

const Label = styled.div`
  padding: 0.6rem;
  width: 20rem;
  border-right: 1px solid ${props => props.theme.colors.colorDarkGray};
`;

const Control = styled.div`
  flex-grow: 1;
  display: flex;
  justify-items: center;
  padding: 0.3rem;
`;
