import styled from "styled-components";
import {Link} from "react-router-dom";

const StickyButton = styled.div`
      position: fixed;
      right: ${props => props.yposition ? props.yposition: "0"};
      top: ${props => props.xposition ? props.xposition : "0"}%;
      min-height: 130px;
      height: auto;
      min-width: 40px;
      width: auto;
      display: flex;
      color: var(--mainFontColor);
      background-color: var(--mainGreen);
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;`
function FixedButton({buttonText, xPosition, yPosition,}) {




    return (
        <Link to={"/demo/register"}>
            <StickyButton xposition={xPosition} yposition={yPosition}>
                <h3 style={{
                    textAlign: "center",
                    width: "100%",
                    textOrientation: "upright",
                    writingMode: "vertical-rl"
                }}>{buttonText}</h3>

            </StickyButton>
        </Link>
    )
}

export default FixedButton