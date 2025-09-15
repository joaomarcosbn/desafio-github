import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
  }

  a.view {
    color: #00aaff;
    margin-top: 20px;
    text-decoration: none;
  }

  a.view:hover {
    text-decoration: underline;
  }

  a.remove {
    color: #ff0000;
    margin-top: 20px;
    text-decoration: none;
  }

  a.remove:hover {
    text-decoration: underline;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
