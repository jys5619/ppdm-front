import { Button, ButtonGroup, Input, Select } from '@/shared/controlls'
import { activeInactiveStateList } from '@/shared/vo/state'
import { FieldValues, SubmitHandler, UseControllerProps, UseFormReturn } from 'react-hook-form'
import { styled } from 'styled-components'
import { QueryFormListFormFields } from './segments/query-form-list-widget.form'
import { QueryFormListSearchVo } from '@/shared/api/data'

interface QueryFormListWidgetFormProps<TFieldValues extends FieldValues = FieldValues>
  extends UseControllerProps<TFieldValues> {
  // control: Control<TFieldValues>
  form: UseFormReturn<QueryFormListFormFields>
  onSearch: (searchVo: QueryFormListSearchVo) => SubmitHandler<QueryFormListFormFields>
}

export function QueryFormListWidgetForm({ form, name, onSearch }: QueryFormListWidgetFormProps) {
  return (
    <Form name={name} onSubmit={form.handleSubmit(onSearch)}>
      <Row>
        <Col>
          <Label>Title</Label>
          <Value>
            <Input name="title" control={form.control} type="text" />
          </Value>
        </Col>
        <Col>
          <Label>State</Label>
          <Value>
            <Select name="state" control={form.control} typeList={activeInactiveStateList} />
          </Value>
        </Col>
      </Row>

      <ButtonGroup right={[<Button type="submit">조회</Button>]} />
    </Form>
  )
}
const Form = styled.form`
  border-top: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  border-left: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  border-right: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
`

const Row = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  display: flex;
`

const Col = styled.div`
  flex-grow: 1;
  border-left: 1px solid ${(props) => props.theme.colors.colorDarkGray};
  display: flex;
`

const Label = styled.div`
  padding: 0.6rem;
  width: 20rem;
  border-right: 1px solid ${(props) => props.theme.colors.colorDarkGray};
`

const Value = styled.div`
  flex-grow: 1;
  display: flex;
  justify-items: center;
  padding: 0.3rem;
`
