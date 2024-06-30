import { ReactNode } from 'react'
import { FieldValues, FormProvider, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { styled } from 'styled-components'

export const Form = ({
  form,
  columns,
  onSubmit,
  children,
}: {
  form: UseFormReturn<FieldValues>
  columns: ReactNode[][]
  onSubmit: SubmitHandler<FieldValues>
  children: ReactNode
}) => {
  return (
    <FormProvider {...form}>
      <FormWrapper onSubmit={form.handleSubmit(onSubmit)}>
        {columns.map((fields: ReactNode[], rowIndex: number) => {
          return (
            <Row key={rowIndex}>
              {fields.map((col: ReactNode, colIndex: number) => {
                return <Col key={colIndex}>{col}</Col>
              })}
            </Row>
          )
        })}
        {children}
      </FormWrapper>
    </FormProvider>
  )
}

const FormWrapper = styled.form`
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
