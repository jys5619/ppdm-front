import { Input, Select } from '@/shared/controlls'
import { activeInactiveStateList } from '@/shared/vo/state'
import { Control, FieldValues, UseControllerProps } from 'react-hook-form'
import { styled } from 'styled-components'

interface QueryFormListWidgetFormProps<TFieldValues extends FieldValues = FieldValues>
  extends UseControllerProps<TFieldValues> {
  control: Control<TFieldValues>
}

export function QueryFormListWidgetForm({ control, name }: QueryFormListWidgetFormProps) {
  return (
    <Form name={name}>
      <Row>
        <Col>
          <Label>Title</Label>
          <Value>
            <Input name="title" control={control} type="text" />
          </Value>
        </Col>
        <Col>
          <Label>State</Label>
          <Value>
            <Select name="state" control={control} typeList={activeInactiveStateList} />
          </Value>
        </Col>
      </Row>
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
