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
              <div>00/00</div>
            </CardData>
          </NumberAndData>
        </FrontCard>

        <BackCard>
          <LineBlack />
          <LineGray>000</LineGray>
        </BackCard>
      </Cards>
    </AreaCardContainer>
  )
}
