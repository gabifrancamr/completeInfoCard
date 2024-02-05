import { Button } from '../../components/Button'
import { FormArea, InfoCard, MonthAndYear } from './styles'
import { FormContent } from '../../components/FormContent/styles'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'

interface ErrorsTypes {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Form() {
  const { register, handleSubmit, formState } = useFormContext()

  const navigate = useNavigate()

  const { errors } = formState as unknown as ErrorsTypes

  function addCardDetails() {
    navigate('/completeInfoCard/completed')
  }

  return (
    <FormContent onSubmit={handleSubmit(addCardDetails)}>
      <FormArea>
        <label htmlFor="cardName">cardholder name</label>
        <Input
          type="text"
          placeholder="Name User"
          {...register('name')}
          error={errors.name?.message}
        />
        <label htmlFor="cardNumber">card number</label>
        <Input
          type="tel"
          placeholder="0000 0000 0000 0000"
          {...register('number')}
          error={errors.number?.message}
          maxLength={19}
        />

        <InfoCard>
          <div>
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <MonthAndYear>
              <div>
                <Input
                  type="tel"
                  placeholder="mm"
                  {...register('month')}
                  error={errors.month?.message}
                  max={12}
                  translate="no"
                  maxLength={2}
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="yyyy"
                  {...register('year')}
                  error={errors.year?.message}
                  min={2024}
                  max={2030}
                  translate="no"
                  maxLength={4}
                />
              </div>
            </MonthAndYear>
          </div>
          <div>
            <label htmlFor="">CVC</label>
            <Input
              type="tel"
              placeholder="123"
              {...register('cvc')}
              error={errors.cvc?.message}
              maxLength={3}
            />
          </div>
        </InfoCard>

        <Button text="confirm" type="submit">
          confirm
        </Button>
      </FormArea>
    </FormContent>
  )
}
