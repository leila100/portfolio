import styled from "styled-components";

import { Icons } from "../../styles/commonStyles";

export const NavIcons = styled(Icons)`
  background: black;
  color: white;
  z-index: 10;
  position: fixed;
  top: 0;

  a {
    margin: 20px 3%;
    font-size: 3rem;
    :hover {
      color: #9acff6;
    }
  }
`;
