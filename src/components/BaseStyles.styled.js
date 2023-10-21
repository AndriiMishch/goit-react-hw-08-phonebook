import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
      background: #9b9ea3;


      display: flex;
      justify-content: center;
    }
    button {
      background: transparent;
      border-radius: 3px;
      border: 2px solid #9b9ea3;
      color: #9b9ea3;
      padding: 0.25em 1em;
      transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    
      &:focus, &:hover {
        background: #9b9ea3;
        color: white;
      }
    }
    input{
      background: transparent;
      border-radius: 3px;
      border: 2px solid #9b9ea3;
      color: #9b9ea3;
      padding: 0.25em 1em;
      width: 155px;
      transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    }
`;