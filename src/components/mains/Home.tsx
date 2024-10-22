
// const StyledH1 = styled.h1`
//     padding: 0;
//     margin:0;
//     margin-left:30%; /* Keeps the left margin for specific placement */
//     height: 100%;
// `;
//
//
// const StyledEacher = styled.div`
//     display: block;
//     box-sizing: border-box;
//     margin:0;
// `;
//
// const StyledP = styled.p`
//     text-align: center;
//     line-height: 1.7;
//     font-size: calc(5px + 1vw);
//     margin: 0;
// `;
//
// const StyledTextDiv = styled.div`
//     width: 90%;
//     line-height: 2;
//     margin:0;
// `;

export default function Home() {
    return (
        <>

            <div className="ed">

                    <h1>Home</h1>

                <div className="eacher">
                    <img src={`https://cs-people.bu.edu/jood2002/media/angelina.jpeg`} alt="Me allegedly :)"/>

                    <div className="intro-text">
                        <p>Hi! My name is Jood Alasiri. I'm a student at Boston University studying Computer
                            Science. From an early age, I have been fascinated by the power of technology and its
                            ability to shape the world we live in. Over the years, my interest in computers has
                            grown significantly, and I’ve found myself drawn to the intricacies of software
                            development, problem-solving, and the endless potential that programming holds.</p>

                        <p>My current goal is to gain a broad understanding of Computer Science, while also
                            exploring specific areas like distributed systems and cloud computing. These fields have
                            always intrigued me because they involve solving complex problems at a large scale.
                            Distributed systems, in particular, require a deep understanding of how different
                            components interact with each other over a network, which is both challenging and
                            rewarding.</p>

                        <p>In the future, once I have more experience, I plan to specialize in distributed systems.
                            During my studies at Boston University, I took a class that sparked my interest in this
                            area. Even though I didn’t perform as well as I had hoped, I still found the material
                            fascinating. The complexity and importance of distributed systems in today's digital
                            world are undeniable, and I look forward to delving deeper into this field after gaining
                            more hands-on experience in the industry.</p>

                        <p>In this section of my online resume, you will find professional information such as my
                            education and projects, as well as personal details like my hobbies and photos from my
                            life. I hope this gives you a good overview of who I am and what I aspire to achieve in
                            the coming years. Feel free to explore and learn more about my journey in the world of
                            Computer Science.</p>
                    </div>
                </div>


            </div>
        </>
    );}
