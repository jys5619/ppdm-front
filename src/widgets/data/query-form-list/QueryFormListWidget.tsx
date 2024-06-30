import { PageWrapper } from '@/shared/controlls'
import { QueryFormListWidgetProps } from './QueryFormListWidgetProps'
import { useQueryFormListWidget } from './useQueryFormListWidget'
import { useQueryFormListWidgetForm } from './form/useQueryFormListWidgetForm'
import { QueryFormListWidgetForm } from './form/QueryFormListWidgetForm'
import { QueryFormListWidgetGrid } from './grid/QueryFormListWidgetGrid'
import { SectionWrapper } from '@/shared/controlls/wrapper/SectionWrapper'

export function QueryFormListWidget(props: QueryFormListWidgetProps) {
  const { form } = useQueryFormListWidgetForm(props)
  const { queryFormList, onSearch } = useQueryFormListWidget(form)

  return (
    <PageWrapper title="Query Form">
      <SectionWrapper>
        <QueryFormListWidgetForm onSubmit={onSearch} form={form} />
      </SectionWrapper>
      <SectionWrapper>
        <QueryFormListWidgetGrid rowData={queryFormList} />
      </SectionWrapper>
    </PageWrapper>
  )
}
