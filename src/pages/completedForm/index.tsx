import { CompletedFormContent } from './styles'
import completedImage from '../../assets/icon-complete.svg'
import { FormContent } from '../../components/FormContent/styles'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useFormContext } from 'react-hook-form'
export function CompletedOrder() {
  const { setValue } = useFormContext()

  function clearInput() {
    setValue('name', '')
    setValue('number', '')
    setValue('month', '')
    setValue('year', '')
    setValue('cvc', '')
  }

  const navigate = useNavigate()

  function backToForm() {
    navigate('/completeInfoCard')
    clearInput()
  }

  return (
    <FormContent>
      <CompletedFormContent>
        <img src={completedImage} alt="" />
        <h1>Thank You!</h1>
        <p>We have added your card details</p>
        <Button text="back" onClick={backToForm}>
          Back
        </Button>
      </CompletedFormContent>
    </FormContent>
  )
}
