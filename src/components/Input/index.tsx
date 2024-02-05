import { InputHTMLAttributes, forwardRef } from 'react'
import { InputContainer, InputStyles } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <InputContainer>
        <InputStyles ref={ref} {...props} hasError={!!error} />
        {error && <p>{error}</p>}
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
