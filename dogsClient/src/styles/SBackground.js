import styled from "styled-components";

import backgroundURLimg from "../assets/background_Dogs.png";

export const SBackground = styled.div.attrs((props)=> ({

}))`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${backgroundURLimg});
  height: 100vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
`