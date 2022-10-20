import styled from "styled-components";

export const PreviewStyle = styled.div`
  padding: 0 1rem;
  blockquote{
    padding-left: 5px;
    margin-left: 25px;
    border-left: 3px solid #224b4b;
    color: #224b4b;
  }
  pre{
    background-color: white;
    padding: 5px;
    line-height: 1.2;
  }
  code{
    font-weight: bold;
  }
  h1{
    border-bottom: 2px solid;
  }
  h2{
    border-bottom: 1px solid;
  }
  th,td{
    border: 2px solid;
    padding: 5px;
  }
  img{
    max-width: 90%;
    margin: 2em auto;
  }
`;