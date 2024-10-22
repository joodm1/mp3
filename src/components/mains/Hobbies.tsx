import styled from 'styled-components';
import "../Styler.css"; // Your external CSS file with the .eacher class

import chess from '../../../public/chess.jpg';
import conf from '../../../public/conf.jpg';
import me from '../../../public/Me.jpg';
import living from '../../../public/living.jpg';
import journal from '../../../public/journal.jpg';


const StyledH1=styled.h1`
    text-align: center; /* Centers the \`h1\` element text horizontally within its container. */
    margin-top: 5%; /* Adds a 5% top margin, creating vertical spacing from the element above. */
    margin-bottom: 5%; /* Adds a 5% bottom margin, separating it from content below. */
    font-size: calc(10px + 3vw); 
`;

export default function Hobbies() {
    return (
        <>
            {/* Hobbies section */}
            <div>
                <StyledH1>My Hobbies</StyledH1>

                {/* Hobby 1: Exploring Abandoned Places */}
                <div className="eacher">
                    <h3>Going to See Abandoned Places</h3>
                    <p id="hobbies">
                        <img src={me} alt="selfie of me at an abandoned broken office" />
                        <img src={living} alt="abandoned living room" />
                    </p>
                    <p>
                        This picture is of me in an abandoned house, one of my favorite recent adventures!! Made sure
                        to pick a picture where you can see my colored hair in lol.
                    </p>
                    <p>
                        Also an example journal entry I had. There are others ones that I wanted to share, but they have
                        some personal quotes around them :(
                    </p>
                    <p>
                        Exploring abandoned places is a unique and sometimes dangerous hobby, often involving encounters
                        with squatters—people who live in these areas and defend them—or scalpers, who enter these
                        places to steal items or plumbing. Despite the risks, this hobby can evoke a deep sense of
                        nostalgia and emotion, witnessing the beauty or intrigue of something left behind for years,
                        sometimes even decades.
                    </p>
                    <p>
                        While there are those who break into these buildings or steal from them, I take pride in
                        respecting the places I explore. I leave everything as it is, and my visits are solely to draw
                        or watercolor in my journey journal the fascinating things I find inside and take pictures,
                        honoring the location, its history, and the people connected to it. Interestingly, there's an
                        "abandoned" spot right on campus—the fifth floor of 707 Commonwealth Ave.
                    </p>
                </div>

                {/* Hobby 2: Painting */}
                <div className="eacher">
                    <h3>Painting</h3>
                    <p><img src={journal} alt="drawing" /></p>
                    <p>
                        I've always loved drawing, especially when I was younger, but my journey into painting was more
                        of a push than a natural progression. In school, we were required to use acrylics as part of the
                        curriculum, and though I initially resisted, I soon found a certain appeal in their versatility.
                        Acrylics dry quickly, which matched my impatient nature, and I could experiment with layering
                        and bold colors.
                    </p>
                    <p>
                        For a long time, I thought, "Why would I ever switch to oil painting? It's expensive, takes
                        forever to dry, and I’m far too impatient for that." But as my skills and understanding of the
                        craft grew, so did my curiosity. Eventually, I made the switch to oil painting, and while it did
                        challenge my patience, I discovered the rich textures and deep, vibrant hues that only oils can
                        provide. It was a rewarding shift, allowing me to explore new techniques and creative
                        possibilities that have since become a core part of my artistic expression.
                    </p>
                </div>

                {/* Hobby 3: Chess */}
                <div className="eacher">
                    <h3>Chess</h3>
                    <p><img src={chess} alt="Chess Set" /></p>
                    <p>
                        I worked hard on my chess skills this summer and managed to improve my score by 400 points!
                        However, I eventually hit a "wall" and became so frustrated that I swore to God I wouldn’t play
                        for the rest of the year. Hitting that wall was tough—I even cried for hours because it felt
                        like all my efforts weren’t paying off.
                    </p>
                    <p>This chess set in the picture isn’t mine, but it's my dream set.</p>
                </div>

                {/* Hobby 4: Reading */}
                <div className="eacher">
                    <h3>Reading</h3>
                    <p><img src={conf} alt="the book" /></p>
                    <p>
                        Though I have an extremely hard time reading and paying attention, I read everything from
                        behavioral economics to Soviet history. I'm currently reading this book while I still have some
                        free time. It's about how Middle Easterners deal with conflict, focusing specifically on the
                        tribal systems in Arabia and their role in wars. As an Arab from a very tribal part of Saudi
                        Arabia, I find it fascinating to discover facts and perspectives that I've never considered
                        before.
                    </p>
                </div>
            </div>
        </>
    );
}
