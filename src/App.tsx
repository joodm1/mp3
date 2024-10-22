import {Routes, Route, RouterProvider, createBrowserRouter} from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components'; // Import createGlobalStyle
import Nav from './components/Nav';
import Home from './components/mains/Home.tsx';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Hobbies from "./components/mains/Hobbies.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Projects from "./components/mains/Projects.tsx";
import Languages from "./components/mains/Languages.tsx";

// Define global styles using createGlobalStyle

const GlobalWrapper = styled.div`
    display: flex; /* Uses flexbox to lay out the child elements inside the \`.wrappar\` container, making it easier to align the sidebar and main content. */
    position: relative; /* Positions the \`.wrappar\` relative to its normal position, which could be helpful for positioning its children. */
    margin-bottom: 5%; /* Adds space at the bottom of the \`.wrappar\` container, creating separation from elements below it. */


    @media screen and (max-width: 750px) {

        flex-direction: column; /*almost died trying to figure this one out </3  */
    }
`;
function Root() {
    return (
        <>
            <Banner />
            <GlobalWrapper>
            <Nav />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/Hobbies" element={<Hobbies />} />
                <Route path="/Languages" element={<Languages />} />
                <Route path="/Education" element={<Education />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Experiences" element={<Experiences />} />

            </Routes>

            </GlobalWrapper>
            <Footer />
        </>
    );
}

const router = createBrowserRouter([
    { path: "*", Component: Root },
]);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}
