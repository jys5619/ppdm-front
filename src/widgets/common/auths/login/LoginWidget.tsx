import { useLoginWidget } from './useLoginWidget'
import { LoginWidgetForm } from './form/LoginWidgetForm'
import { useLoginWidgetForm } from './form/useLoginWidgetForm'
import { PageWrapper } from '@/shared/controlls'
import { SectionWrapper } from '@/shared/controlls/wrapper/SectionWrapper'

export function LoginWidget() {
  const { form } = useLoginWidgetForm()
  const { onSubmit } = useLoginWidget(form)

  return (
    <PageWrapper title="Login">
      <SectionWrapper>
        <LoginWidgetForm onSubmit={onSubmit} form={form} />
      </SectionWrapper>
    </PageWrapper>
  )
}
