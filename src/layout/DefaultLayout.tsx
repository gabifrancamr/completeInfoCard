import { Outlet } from 'react-router-dom'
import { AreaCard } from '../components/AreaCard/AreaCard'
import { DefaultLayoutContent } from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formCardValidationSchema = zod.object({
  name: zod.string().min(1, 'Informe o nome do usuário'),
  number: zod.string().min(1, 'Informe o número do cartão'),
  month: zod.string().min(1, 'Informe o mês'),
})

export function DefaultLayout() {
  const informationForm = useForm({
    resolver: zodResolver(formCardValidationSchema),
    defaultValues: {
      name: '',
      number: '0000 0000 0000 0000',
    },
  })
  return (
    <DefaultLayoutContent>
      <FormProvider {...informationForm}>
        <AreaCard />
        <Outlet />
      </FormProvider>
    </DefaultLayoutContent>
  )
}
