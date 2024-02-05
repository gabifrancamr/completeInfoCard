import styled from 'styled-components'

export const DefaultLayoutContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 750px) {
    flex-direction: row;
  }
`
