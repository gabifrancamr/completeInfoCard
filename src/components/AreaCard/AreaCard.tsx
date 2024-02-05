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

import VanillaTilt from 'vanilla-tilt'
import { useEffect } from 'react'

export function AreaCard() {
  const { watch } = useFormContext()

  const name = watch('name')
  const number = watch('number')
  const month = watch('month')
  const year = watch('year')
  const cvc = watch('cvc')

  useEffect(() => {
    const cards = document.querySelectorAll('.card')
    const cardsArray = Array.from(cards) as HTMLElement[]
    VanillaTilt.init(cardsArray, {
      max: 25,
      speed: 400,
    })
  }, [])

  return (
    <AreaCardContainer>
      <Cards>
        <FrontCard className="card">
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

        <BackCard className="card">
          <LineBlack />
          <LineGray>{cvc || '000'}</LineGray>
        </BackCard>
      </Cards>
    </AreaCardContainer>
  )
}
