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
  return (
    <AreaCardContainer>
      <Cards>
        <FrontCard>
          <Circles>
            <WhiteCircle />
            <TransparentCircle />
          </Circles>
          <NumberAndData>
            <CardNumber>0000 0000 0000 0000</CardNumber>
            <CardData>
              <div>name user</div>
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
