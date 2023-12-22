import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f8f8f8;
    color: #333333;
   : 0;
    padding: 0;
    box-sizing: border-box;
  }
 
  h1 {
    font-size: 2.5rem;
    color: #333333;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    color: #555555;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

 

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #007bff;
    color: #ffffff;
    :hover {
      background-color: #0056b3;
    }
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #cccccc;
    border-radius: 4px;
    :focus {
      outline: none;
      border-color: #007bff;
    }
  }

`

export default GlobalStyles
