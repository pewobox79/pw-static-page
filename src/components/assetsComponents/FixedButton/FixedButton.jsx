import styled from "styled-components";
import {Link} from "react-router-dom";

function FixedButton({buttonText, xPosition, yPosition,}) {

    const StickyButton = styled.div`
      position: fixed;
      right: ${yPosition ? yPosition: "0"};
      top: ${xPosition ? xPosition : "0"}%;
      min-height: 130px;
      height: auto;
      min-width: 40px;
      width: auto;
      display: flex;


      background-color: var(--mainGreen);

    `


    return (
        <Link to={"/demo/register"}>
            <StickyButton>
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