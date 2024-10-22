import styled from 'styled-components';
import {Link} from 'react-router-dom'




const StyledFooter = styled.footer`
   
    
    
    margin: 5% 0% 1% 16%; /* Adds vertical margin above and below the footer, as well as a left margin of 16% to align the footer towards the center-right of the page. */
    bottom: 0; /* Positions the footer at the bottom of its container. */
    position: relative; /* Keeps the footer positioned relative to its normal position in the document flow. */
    
    a {
        color: white; /* Changes the text color of links in the footer to white to match the footer text color. */
        text-decoration: none; /* Removes the default underline from links. */
    }

    @media (max-width: 750px) {
        text-align: center; /* Centers the text inside the footer. */
        margin: 0; /* Removes default margins. */
        padding: 20px 0; /* Adds padding on the top and bottom to space the footer content. */
        width: 100%; /* Ensures the footer spans the full width of the viewport. */
        background-color: #4b4276; /* Sets the background color of the footer to a dark purple (#4b4276). */
        color: white; /* Makes the text color white for good contrast against the dark background. */
        bottom: 0; /* Positions the footer at the bottom of the containing element. */
        position: relative; /* The footer is positioned relative to its normal position. */
    }

`;

export default function Footer() {



    return (

        <StyledFooter>
            <p>All rights reserved by Jood Alasiri <Link to="">Credits</Link> &#169;</p></StyledFooter>
    );


}