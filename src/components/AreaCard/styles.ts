import styled from 'styled-components'

export const AreaCardContainer = styled.div`
  width: 100%;
  height: 13rem;
  background: rgb(63, 94, 251);
  background: linear-gradient(
    90deg,
    hsl(230, 96%, 62%) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;

  @media (min-width: 750px) {
    position: relative;
    width: 428px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }

  @media (min-width: 1030px) {
    width: 800px;
  }
`

export const Cards = styled.div`
  position: relative;
  margin-top: 3rem;

  @media (min-width: 750px) {
    margin-top: 0;
  }
`

export const FrontCard = styled.div`
  position: absolute;
  top: 15px;
  left: -135px;
  z-index: 10;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    103deg,
    rgb(189 56 102) 0%,
    rgba(253, 29, 29, 1) 56%,
    rgba(252, 176, 69, 1) 100%
  );
  box-shadow: 10px 5px 24px #ffffff;
  width: 201px;
  height: 121px;
  border-radius: 10px;

  @media (min-width: 750px) {
    top: -167px;
    left: -114px;
    width: 277px;
    height: 167px;
  }

  @media (min-width: 1030px) {
    top: -245px;
    left: -18px;
    width: 351px;
    height: 203px;
  }
`

export const Circles = styled.div`
  display: flex;
`

export const WhiteCircle = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;

  @media (min-width: 750px) {
    width: 34px;
    height: 34px;
  }
`

export const TransparentCircle = styled.div`
  position: absolute;
  top: 18px;
  left: 45px;
  width: 13px;
  height: 13px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50%;

  @media (min-width: 750px) {
    top: 20px;
    left: 56px;
    width: 20px;
    height: 20px;
  }
`

export const NumberAndData = styled.div`
  position: relative;
  width: 201px;
  height: 100px;
  display: flex;
  justify-content: center;

  @media (min-width: 750px) {
    width: 277px;
    top: 44px;
  }

  @media (min-width: 1030px) {
    width: 351px;
    top: 44px;
  }
`

export const CardNumber = styled.div`
  position: absolute;
  top: 60px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #ffffff;
  width: auto;
  text-decoration: none;

  @media (min-width: 750px) {
    font-size: 20px;
  }

  @media (min-width: 1030px) {
    font-size: 27px;
  }
`

export const CardData = styled.div`
  position: absolute;
  top: 80px;
  width: 160px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #ffffff;

  div {
    text-transform: uppercase;
  }

  @media (min-width: 750px) {
    top: 83px;
    width: 228px;
  }

  @media (min-width: 1030px) {
    top: 94px;
    width: 287px;
    font-size: 20px;
  }
`

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: -9px;
  left: -77px;
  z-index: 9;
  background: rgb(214, 198, 226);
  background: linear-gradient(
    103deg,
    rgba(214, 198, 226, 1) 0%,
    rgba(223, 186, 199, 9.9164040616246498) 56%,
    rgba(157, 128, 126, 1) 100%
  );
  box-shadow: 10px 5px 24px #ffffff;
  width: 201px;
  height: 121px;
  border-radius: 10px;

  @media (min-width: 750px) {
    top: 21px;
    left: -93px;
    width: 277px;
    height: 167px;
  }

  @media (min-width: 1030px) {
    top: -17px;
    left: 29px;
    width: 351px;
    height: 203px;
  }
`
export const LineBlack = styled.div`
  width: 201px;
  height: 22px;
  background-color: #2f2d2d;
  position: absolute;
  top: 20px;

  @media (min-width: 750px) {
    width: 277px;
  }

  @media (min-width: 1030px) {
    width: 351px;
    height: 39px;
  }
`

export const LineGray = styled.div`
  position: absolute;
  top: 49px;
  width: 132px;
  height: 24px;
  background-color: rgb(121, 121, 121);
  border-radius: 3px;
  text-align: end;
  padding: 5px;
  font-size: 12px;
  color: #d1c8c8;

  @media (min-width: 750px) {
    width: 167px;
  }

  @media (min-width: 1030px) {
    width: 207px;
    top: 71px;
    font-size: 20px;
    height: 32px;
  }
`
