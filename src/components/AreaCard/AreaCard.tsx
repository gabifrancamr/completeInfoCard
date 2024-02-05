import { useFormContext } from 'react-hook-form'
import {
  AreaCardContainer,
  Cards,
  Circles,
  FrontCard,
  NumberAndData,
  TransparentCircle,
  WhiteCircle,
  CardNumber,
  CardData,
  BackCard,
  LineBlack,
  LineGray,
} from './styles'

export function AreaCard() {
  const { watch } = useFormContext()

  const name = watch('name')
  const number = watch('number')
  const month = watch('month')
  const year = watch('year')
  const cvc = watch('cvc')

  return (
    <AreaCardContainer>
      <Cards>
        <FrontCard>
          <Circles>
            <WhiteCircle />
            <TransparentCircle />
          </Circles>
          <NumberAndData>
            <CardNumber>{number || '0000 0000 0000 0000'}</CardNumber>
            <CardData>
              <div>{name || 'Name User'}</div>
              <div>
                {month || '00'}/ {year || '0000'}
              </div>
            </CardData>
          </NumberAndData>
        </FrontCard>

        <BackCard>
          <LineBlack />
          <LineGray>{cvc || '000'}</LineGray>
        </BackCard>
      </Cards>
    </AreaCardContainer>
  )
}
