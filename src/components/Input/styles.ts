import styled, { css } from 'styled-components'

interface InputStylesProps {
  hasError: boolean
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: red;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
`

export const InputStyles = styled.input<InputStylesProps>`
  width: 100%;
  margin: 0.75rem 0 0.8rem;
  padding: 0.75rem;
  border-radius: 10px;
  border: 1px solid hsl(279, 6%, 55%);
  font-size: 20px;

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: red;
    `}
`
