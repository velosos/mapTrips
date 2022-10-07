import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root{
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;

}
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html{
      font-size: 62.5%;
  }

  html, body, #__next {
      height: 100%;
      background: linear-gradient(-45deg, #0061F2, #5800E8, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
    color:var(--white)
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

  }

  body{
      font-family:'Poppins', sans-serif;
  }

  p {
      font-size: 2rem;
      line-height: var(--medium);
  }

  a {
      color: var(--highlight)
  }
`

export default GlobalStyle
