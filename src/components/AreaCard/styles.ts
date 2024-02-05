import styled from 'styled-components'

export const AreaCardContainer = styled.div`
  width: 428px;
  height: 100vh;
  background: rgb(63, 94, 251);
  background: linear-gradient(
    90deg,
    hsl(230, 96%, 62%) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Cards = styled.div`
  position: relative;
`

export const FrontCard = styled.div`
  position: absolute;
  top: -245px;
  left: -18px;
  width: 351px;
  height: 203px;
  z-index: 10;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    103deg,
    rgb(189 56 102) 0%,
    rgba(253, 29, 29, 1) 56%,
    rgba(252, 176, 69, 1) 100%
  );
  box-shadow: 10px 5px 24px #ffffff;
  border-radius: 10px;
`

export const Circles = styled.div`
  display: flex;
`

export const WhiteCircle = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 34px;
  height: 34px;
  background-color: white;
  border-radius: 50%;
`

export const TransparentCircle = styled.div`
  position: absolute;
  top: 20px;
  left: 56px;
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 50%;
`

export const NumberAndData = styled.div`
  position: relative;
  width: 351px;
  top: 44px;

  height: 100px;
  display: flex;
  justify-content: center;
`

export const CardNumber = styled.div`
  position: absolute;
  top: 60px;
  font-size: 27px;
  letter-spacing: 1px;
  color: #ffffff;
  width: auto;
  text-decoration: none;
`

export const CardData = styled.div`
  position: absolute;
  top: 94px;
  width: 287px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;

  color: #ffffff;

  div {
    text-transform: uppercase;
  }
`

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -17px;
  left: 29px;
  width: 351px;
  height: 203px;
  z-index: 9;
  background: rgb(214, 198, 226);
  background: linear-gradient(
    103deg,
    rgba(214, 198, 226, 1) 0%,
    rgba(223, 186, 199, 9.9164040616246498) 56%,
    rgba(157, 128, 126, 1) 100%
  );
  box-shadow: 10px 5px 24px #ffffff;
  border-radius: 10px;
`
export const LineBlack = styled.div`
  width: 351px;
  height: 39px;
  background-color: #2f2d2d;
  position: absolute;
  top: 20px;
`

export const LineGray = styled.div`
  position: absolute;
  width: 207px;
  top: 71px;
  font-size: 20px;
  height: 32px;
  background-color: rgb(121, 121, 121);
  border-radius: 3px;
  text-align: end;
  padding: 5px;
  color: #d1c8c8;
`
