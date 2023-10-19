import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }

  .wr_cards {
    display: flex;
    justify-content: center;
    align-items: center;
    }
    body{
        background-color: #F2F2F2;
    }

    h2{
        font-size: 18px;
        font-weight: bold;
    }
    p{
        font-weight: bold;
        font-size: 15px;
        line-height: 28px;
    }
    .price{
        font-size: 72px;
        font-weight: bold;
    }
    .opt {
        border-top: 1px solid grey;
        margin-top: 0;
        margin-bottom: 0;
        padding: 10px;
    }



`;
