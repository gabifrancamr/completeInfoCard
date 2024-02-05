import styled from 'styled-components'

export const FormArea = styled.form`
  width: 50%;
  font-size: 20px;
  height: auto;
  margin-top: 25px;

  label {
    text-transform: uppercase;
  }

  input {
    width: 100%;
    margin: 0.75rem 0 0.8rem;
    padding: 0.75rem;
    border-radius: 10px;
    border: 1px solid hsl(279, 6%, 55%);
    font-size: 20px;
  }
`

export const InfoCard = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`

export const ExpirationDate = styled.div``

export const MonthAndYear = styled.div`
  display: flex;
  gap: 0.5rem;

  input {
    text-transform: uppercase;
  }
`

export const Cvc = styled.div``
