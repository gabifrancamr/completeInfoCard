import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Grotesk';
}

@media (max-width: 768px) {
    html {
        font-size: 87.5%;
    }
}

`
