import styled from "styled-components";

const StyledBanner  = styled.div`

      
        background-color: teal; /* Sets the banner's background color to teal. */
        max-width: 100%; /* Ensures the banner does not exceed the full width of the viewport. */
        margin: 0 0; /* Centers the banner horizontally within its container. */
        height: 60%; /* Sets the height of the banner to 60% of its container. This might result in a large banner depending on the container's height. */
        position: relative; /* Positions the banner relative to its normal position, allowing it to be moved using \`top\`, \`bottom\`, \`left\`, and \`right\` properties. */
        top: 0; /* Positions the banner at the top of its containing element. */
        z-index: 1; /* Ensures the banner is above other elements, particularly those with a lower \`z-index\`, such as the sidebar. */
    padding: 16px; /* Adds 16px of padding inside the banner content, ensuring space between the content and the edges of the banner. */
    text-align: center; /* Centers the text inside the banner. */
    color: white; /* Sets the text color to white for good contrast against the teal background. */

   
    h1{
        
            font-size: calc(10px + 3vw); /* Makes the font size of all \`h1\` elements responsive, scaling based on the viewport width. This keeps the \`h1\` headings readable and appropriately sized on different screen sizes. */
        
    }
    h4{
   font-size:  calc(5px + 1vw);
    }
    

`;


export default function Banner() {
    return (
    <StyledBanner>
        <h1>Jood Alasiri</h1>
        <h4>My Resume</h4>
    </StyledBanner>);


}