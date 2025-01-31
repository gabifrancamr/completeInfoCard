import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { Outlet } from 'react-router-dom'
import * as zod from 'zod'
import { AreaCard } from '../components/AreaCard/AreaCard'
import { DefaultLayoutContent } from './styles'

const currentYear = new Date().getFullYear()
const limitYear = currentYear + 5

const formCardValidationSchema = zod.object({
  name: zod.string().min(1, 'Enter the user’s name'),
  number: zod
    .string()
    .min(19, 'The minimum expected digits are 16')
    .max(19, 'The maximum number of digits exceeded'),
  month: zod
    .string()
    .min(2, 'Enter 2 digits')
    .max(2, 'Enter 2 digits')
    .refine((value) => {
      const month = parseInt(value)
      return month >= 1 && month <= 12
    }, 'Invalid month'),
  year: zod
    .string()
    .min(4, 'Enter the expiration year')
    .max(4, 'Enter 4 digits')
    .refine((value) => {
      const yearNumber = parseInt(value)
      return yearNumber >= currentYear && yearNumber <= limitYear
    }, `Invalid year. Must be between ${currentYear} and ${limitYear}`),
  cvc: zod.string().min(3, 'Enter the CVC').max(3, 'Enter 3 digits'),
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
