import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import constants from '@/shared/contants/constants'
import { useAppSetting } from '@/shared/store'

const schema = z.object({
  email: z.string().email({ message: '이메일을 올바르게 입력해 주세요' }).optional(),
  password: z
    .string()
    .min(8, { message: '8자리 이상 입력해 주세요.' })
    .max(15, { message: '15자리 이하 입력해 주세요.' })
    .regex(constants.PASSWORD_REGEX, {
      message: '영문, 숫자를 조합해 주세요.',
    })
    .optional(),
  remember: z.boolean().optional(),
})

export type LoginFormFields = z.infer<typeof schema>

export function useLoginWidgetForm() {
  const { userEmail } = useAppSetting()

  const form = useForm<LoginFormFields>({
    defaultValues: {
      email: 'example@test.com' || userEmail,
      password: 'aaaa1111',
      remember: !!userEmail,
    },
    mode: 'onSubmit',
    resolver: zodResolver(schema),
  })

  return {
    form,
  }
}
