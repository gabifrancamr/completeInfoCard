import { Outlet } from 'react-router-dom'
import { AreaCard } from '../components/AreaCard/AreaCard'
import { DefaultLayoutContent } from './styles'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const currentYear = new Date().getFullYear()
const limitYear = currentYear + 5

const formCardValidationSchema = zod.object({
  name: zod.string().min(1, 'Informe o nome do usuário'),
  number: zod
    .string()
    .min(16, 'O mínimo de digitos esperados é 16')
    .max(16, 'O máximo de dígitos ultrapassados'),
  month: zod
    .string()
    .min(2, 'Informe 2 dígitos')
    .max(2, 'Informe 2 dígitos')
    .refine((value) => {
      const month = parseInt(value)
      return month >= 1 && month <= 12
    }, 'Mês inválido'),
  year: zod
    .string()
    .min(4, 'Informe o ano de expiração')
    .max(4, 'Informe 4 dígitos')
    .refine((value) => {
      const yearNumber = parseInt(value)
      return yearNumber >= currentYear && yearNumber <= limitYear
    }, `Ano inválido. Deve estar entre ${currentYear} e ${limitYear}`),
  cvc: zod.string().min(3, 'Informe o cvc').max(3, 'Informe 3 dígitos'),
})

export function DefaultLayout() {
  const informationForm = useForm({
    resolver: zodResolver(formCardValidationSchema),
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
