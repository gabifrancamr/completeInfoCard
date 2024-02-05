import { Button } from '../../components/Button'
import { FormArea, InfoCard, MonthAndYear } from './styles'
import { FormContent } from '../../components/FormContent/styles'

export function Form() {
  return (
    <FormContent>
      <FormArea>
        <label htmlFor="cardName">cardholder name</label>
        <input type="text" placeholder="Name User" />
        <label htmlFor="cardNumber">card number</label>
        <input type="text" placeholder="0000 0000 0000 0000" />

        <InfoCard>
          <div>
            <label htmlFor="">EXP. DATE (MM/YY)</label>
            <MonthAndYear>
              <div>
                <input type="text" placeholder="mm" />
              </div>
              <div>
                <input type="text" placeholder="yyyy" />
              </div>
            </MonthAndYear>
          </div>
          <div>
            <label htmlFor="">CVC</label>
            <input type="number" placeholder="123" />
          </div>
        </InfoCard>

        <Button text="confirm" type="submit">
          confirm
        </Button>
      </FormArea>
    </FormContent>
  )
}
