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
    width: 26.75rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
  }

  @media (min-width: 1030px) {
    width: 50rem;
  }
`

export const Cards = styled.div`
  position: relative;
  margin-top: 4rem;

  @media (min-width: 750px) {
    margin-top: 0;
  }
`

export const FrontCard = styled.div`
  position: absolute;
  top: 0.9375rem;
  left: -8.4375rem;
  z-index: 10;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    103deg,
    rgb(189 56 102) 0%,
    rgba(253, 29, 29, 1) 56%,
    rgba(252, 176, 69, 1) 100%
  );
  box-shadow: 0.625rem 0.313rem 1.5rem #ffffff;
  width: 12.563rem;
  height: 7.563rem;
  border-radius: 10px;

  @media (min-width: 750px) {
    top: -10.4375rem;
    left: -7.125rem;
    width: 17.313rem;
    height: 10.4375rem;
  }

  @media (min-width: 1030px) {
    top: -15.3125rem;
    left: -1.125rem;
    width: 21.9375rem;
    height: 12.6875rem;
  }
`

export const Circles = styled.div`
  display: flex;
`

export const WhiteCircle = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  width: 1.5625rem;
  height: 1.5625rem;
  background-color: white;
  border-radius: 50%;

  @media (min-width: 750px) {
    width: 2.125rem;
    height: 2.125rem;
  }
`

export const TransparentCircle = styled.div`
  position: absolute;
  top: 1.125rem;
  left: 2.8125rem;
  width: 0.8125rem;
  height: 0.8125rem;
  background-color: transparent;
  border: 0.0625rem solid #ffffff;
  border-radius: 50%;

  @media (min-width: 750px) {
    top: 1.25rem;
    left: 3.5rem;
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const NumberAndData = styled.div`
  position: relative;
  width: 12.5625rem;
  height: 6.25rem;
  display: flex;
  justify-content: center;

  @media (min-width: 750px) {
    width: 17.3125rem;
    top: 2.75rem;
  }

  @media (min-width: 1030px) {
    width: 21.9375rem;
    top: 2.75rem;
  }
`

export const CardNumber = styled.div`
  position: absolute;
  top: 3.75rem;
  font-size: 0.875rem;
  letter-spacing: 0.0625rem;
  color: #ffffff;
  width: auto;
  text-decoration: none;

  @media (min-width: 750px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1030px) {
    font-size: 1.6875rem;
  }
`

export const CardData = styled.div`
  position: absolute;
  top: 5rem;
  width: 10rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #ffffff;

  div {
    text-transform: uppercase;
  }

  @media (min-width: 750px) {
    top: 5.1875rem;
    width: 14.25rem;
  }

  @media (min-width: 1030px) {
    top: 5.875rem;
    width: 17.9375rem;
    font-size: 1.25rem;
  }
`

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: -0.5625rem;
  left: -4.8125rem;
  z-index: 9;
  background: rgb(214, 198, 226);
  background: linear-gradient(
    103deg,
    rgba(214, 198, 226, 1) 0%,
    rgba(223, 186, 199, 9.9164040616246498) 56%,
    rgba(157, 128, 126, 1) 100%
  );
  box-shadow: 0.625rem 0.3125rem 1.5rem #ffffff;
  width: 12.5625rem;
  height: 7.5625rem;
  border-radius: 10px;

  @media (min-width: 750px) {
    top: 1.3125rem;
    left: -5.8125rem;
    width: 17.3125rem;
    height: 10.4375rem;
  }

  @media (min-width: 1030px) {
    top: -1.0625rem;
    left: 1.8125rem;
    width: 21.9375rem;
    height: 12.6875rem;
  }
`
export const LineBlack = styled.div`
  width: 12.5625rem;
  height: 1.375rem;
  background-color: #2f2d2d;
  position: absolute;
  top: 1.25rem;

  @media (min-width: 750px) {
    width: 17.3125rem;
  }

  @media (min-width: 1030px) {
    width: 21.9375rem;
    height: 2.4375rem;
  }
`

export const LineGray = styled.div`
  position: absolute;
  top: 3.0625rem;
  width: 8.25rem;
  height: 1.5rem;
  background-color: rgb(121, 121, 121);
  border-radius: 3px;
  text-align: end;
  padding: 0.3125rem;
  font-size: 0.75rem;
  color: #d1c8c8;

  @media (min-width: 750px) {
    width: 10.4375rem;
  }

  @media (min-width: 1030px) {
    width: 12.9375rem;
    top: 4.4375rem;
    font-size: 1.25rem;
    height: 2rem;
  }
`
