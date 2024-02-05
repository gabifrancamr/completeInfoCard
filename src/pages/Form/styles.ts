import styled from 'styled-components'

export const FormArea = styled.form`
  width: 70%;
  font-size: 20px;
  height: auto;
  margin-top: 25px;

  label {
    text-transform: uppercase;
  }
`

export const InfoCard = styled.div`
  display: flex;
  //flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;

  input {
    max-width: 6rem;
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`

export const MonthAndYear = styled.div`
  display: flex;
  //flex-wrap: wrap;
  gap: 0.5rem;

  input {
    text-transform: uppercase;
    max-width: 6rem;
  }

  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
`
