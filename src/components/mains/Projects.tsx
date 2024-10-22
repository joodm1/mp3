import styled from "styled-components";
import { useState } from "react";
import Vid1D from '../../assets/media/Vid1DSecond.mp4';
const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center vertically */
    align-items: center; /* Center horizontally */
    min-height: 100vh; /* Full viewport height to ensure vertical centering */
    padding: 20px;
    margin-left: 40%;

    h1 {
        margin-bottom: 20px;
        color: white; /* Ensures the heading is readable */
    }

    @media screen and (max-width: 750px) {
        margin-left: 0;
    }
`;

const StyledBox = styled.div`
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black background */
    padding: 20px; /* Add padding for better spacing */
    border-radius: 10px; /* Optional: round the corners */
    color: white; /* Ensure the text is white for good contrast */
    max-width: 80%; /* Adjust width to make it responsive */
    text-align: center; /* Center the text inside the box */

    @media screen and (max-width: 750px) {
        width: 90%; /* Adjust width for smaller screens */
        padding: 10px;
    }
`;

//got the button from online , eidted it a bit though to make it more adaptive
const StyledButtons = styled.div`
    .button-64 {
        align-items: center;
        background-image: linear-gradient(144deg, #AF40FF, #5B42F3 50%, #00DDEB);
        border: 0;
        border-radius: 8px;
        box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
        box-sizing: border-box;
        color: white;
        display: flex;
        font-family: Phantomsans, sans-serif;
        font-size: calc(3px + 1vw);
        justify-content: center;
        line-height: 1em;
        max-width: 100%;
        min-width: 50%;
        padding: 1%;
        margin : 5%;
  
       
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
        cursor: pointer;
    }

    .button-64:active,
    .button-64:hover {
        outline: 0;
    }

    .button-64 span {
        background-color: rgb(5, 6, 45);
        padding: 5% 10%;
        border-radius: 6px;
        width: 100%;
        height: 100%;
        transition: 300ms;
    }

    .button-64:hover span {
        background: none;
    }

    @media screen and (max-width: 750px) {
        .button-64 {
            font-size: calc(3px + 2vw);
            min-width: 50%;
        }
    }
    margin-left: 20%;
`;

const VideoBackground = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1; /*way in the back queen*/
    opacity: 0.8; /* a little transparent for cutesy effects teehee */
`;

export default function Projects() {
    const [first, setFirst] = useState<number>(0);
    const [second, setSecond] = useState<number>(0);
    const [output, setOutput] = useState<number | null>(null);

    const mypow = () => {
        setOutput(Math.pow(first, second));
    };

    const add = () => {
        setOutput(first + second);
    };

    const sub = () => {
        setOutput(first - second);
    };

    const mult = () => {
        setOutput(first * second);
    };

    const clr = () => {
        setFirst(0);
        setSecond(0);
        setOutput(0);
    };

    return (
        <> {/*learned this froma youtube tutorial i didn't cheat y'all here it the link
            https://www.youtube.com/watch?v=RIDA6elhmBU
            */}
            <VideoBackground autoPlay muted loop>
                <source src={Vid1D} type="video/mp4" />
                Your browser does not support the video tag.
            </VideoBackground>
            <StyledProjects>
                <h1>Project</h1>
                <StyledBox>
                    <label htmlFor="first">Give me a number:</label>
                    <br/>
                    <input
                        id="first"
                        type="number"
                        value={first}
                        onChange={(e) => setFirst(Number(e.target.value))}
                    />
                    <br />
                    <br />
                    <label htmlFor="second">Give me another number:</label>
                    <input
                        id="second"
                        type="number"
                        value={second}
                        onChange={(e) => setSecond(Number(e.target.value))}
                    />
                    <br />
                    <br />

                    <StyledButtons>
                        <button className="button-64"><span onClick={mypow}>Power (**)</span></button>
                        <button className="button-64"><span onClick={add}>Add (+)</span></button>
                        <button className="button-64"><span onClick={sub}>Subtract (-)</span></button>
                        <button className="button-64"><span onClick={mult}>Multiply (*)</span></button>
                        <button className="button-64"><span onClick={clr}>Clear</span></button>
                    </StyledButtons>

                    <div
                        style={{
                            color: output < 0 ? "red" : "white" // Turns red if output is negative
                        }}
                    >
                        Result: {output}
                    </div>

                </StyledBox>

            </StyledProjects>
        </>
    );

}
