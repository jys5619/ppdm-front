import { Button, ButtonGroup, Form, Input } from '@/shared/controlls'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { LoginFormFields } from './useLoginWidgetForm'
import { Checkbox } from '@/shared/controlls/input/checkbox'

interface LoginWidgetFormPorps {
  onSubmit: (data: LoginFormFields) => void
  form: UseFormReturn<FieldValues>
}

export function LoginWidgetForm({ onSubmit, form }: LoginWidgetFormPorps) {
  const Columns = {
    Email: () => {
      return <Input id="email" label="Email" labelSize="8rem" />
    },
    Password: () => {
      return <Input type="password" id="password" label="Password" labelSize="8rem" />
    },
    Remember: () => {
      return (
        <Checkbox type="checkbox" id="remember" align="center" checkboxLabel="이메일 저장하기" />
      )
    },
  }

  const columns = [[Columns.Email()], [Columns.Password()], [Columns.Remember()]]

  return (
    <Form onSubmit={onSubmit} columns={columns} form={form}>
      <div style={{ background: 'white' }}>
        <ButtonGroup right={[<Button type="submit">로그인</Button>]} />
      </div>
    </Form>
  )
}
