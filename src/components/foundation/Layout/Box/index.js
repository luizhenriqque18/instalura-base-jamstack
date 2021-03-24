import styled from "styled-components";
import { propToStyle } from "../../../../theme/util/propToStyle";

export const Box = styled.div`
  ${propToStyle("flex")}
  ${propToStyle("display")}
  ${propToStyle("flexDirection")}
  ${propToStyle("justifyContent")}
  ${propToStyle("flexWrap")}
  ${propToStyle("backgroundImage")}
  ${propToStyle("backgroundRepeat")}
  ${propToStyle("backgroundPosition")}
`;