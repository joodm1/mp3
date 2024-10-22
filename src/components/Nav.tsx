import {Link} from "react-router-dom";
import styled from "styled-components";


const StyledNav = styled.nav`
    position: fixed;
    width: 15%;
    height: 100%;
    background-color: #4b4276;
    padding-top: 10%;
    top: 0;

    h1 {
        color: #fff;
        text-transform: uppercase;
        text-align: center;
    }

    ul {
        list-style: none; /* Ensure the list has no bullets */
        padding: 0; /* Remove any default padding from the list */
    }

    li {
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        border-top: 1px solid rgba(225, 225, 225, 0.03);
    }

    a {
        color: #bdb8d7;
        display: block;
        text-decoration: none; /* Remove the underline */

        &:hover {
            color: #fff;
        }
    }

    @media screen and (max-width: 750px) {
        
            flex-direction: column; /*almost died trying to figure this one out </3  */
        
    
            width: 100%; /* The sidebar takes up the full width of its parent container. */
            height: auto; /* The height adjusts automatically based on the content inside. */
            position: relative; /* This allows for positioning of child elements relative to the sidebar's position in the document flow. */
            display: flex; /* Flexbox layout is applied to the sidebar to arrange its child elements. */
            justify-content: space-around; /* Distributes the child elements (likely list items) evenly with space around them. */
            padding: 1% 0; /* Adds vertical padding of 1% based on the height of the sidebar. */
            background-color: #4b4276; /* Sets a dark purple background color for the sidebar. */
  

        ul {
            display: flex; /* Flexbox layout for the list inside the sidebar. */
            justify-content: space-around; /* Distributes the list items evenly across the width of the sidebar. This creates equal spacing between the items. */
            width: 100%; /* The list takes up the full width of the sidebar. */
        }

       ul li {
            font-size: calc(5px + 1.5vw); /* Responsive font size that adjusts based on the viewport width, ensuring legibility on different devices. */
            box-sizing: border-box; /* Ensures that padding and borders are included within the width and height of the list items. */
            border: none; /* Removes any borders, giving the list items a cleaner, borderless appearance. */

            text-align: center;
        }
    }
`;


export default function Nav() {
    return (
        <StyledNav>
            <br />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Hobbies">Hobbies and artwork</Link></li>
                <li><Link to="/Education">Education</Link></li>
                <li><Link to="/Experiences">Experiences</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Languages">Languages</Link></li>
            </ul>
        </StyledNav>
    );
}