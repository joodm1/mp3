import "../Styler.css";
import styled from "styled-components";

const StyledH1 = styled.h1`
    text-align: center;
    margin-top: 5%;
    margin-left: 10%;
    margin-bottom: 5%;
    font-size: calc(10px + 3vw);


    @media screen and (max-width: 750px) {

       margin-left: 2%;
    }
`;

const StyledP = styled.p`
    text-align: center;
    margin-left: 17%;
`;

const StyledP2 = styled.p`
    text-align: center;
`;

const StyledH3 = styled.h3`
    color: #4b4276;
`;

export default function Languages() {
    return (
        <>
            <div className="ed">
                <StyledH1>Languages</StyledH1>
                <StyledP>
                    Over the course of my studies and personal projects, I’ve gained experience with various programming
                    languages, each with its own strengths and typical use cases. Here’s an overview of the languages I code
                    in and how I use them:
                </StyledP>

                <div className="eacher">
                    <StyledH3>OCaml</StyledH3>
                    <StyledP2>
                        OCaml is a functional programming language known for its strong type system and pattern matching,
                        which makes it excellent for writing concise and reliable code. I have used OCaml primarily in
                        academic settings for courses that focus on functional programming paradigms and algorithm design.
                        It’s particularly useful for symbolic computation, language processing, and developing compilers.
                    </StyledP2>
                </div>

                <div className="eacher">
                    <StyledH3>SML (Standard ML)</StyledH3>
                    <StyledP2>
                        Standard ML is another functional programming language that emphasizes formal type safety and
                        simplicity. I have utilized SML in coursework that explores the principles of programming languages,
                        type inference, and formal verification. Its strong typing and modularity make it ideal for
                        theoretical computer science applications and teaching fundamental programming concepts.
                    </StyledP2>
                </div>

                <div className="eacher">
                    <StyledH3>Java</StyledH3>
                    <StyledP2>
                        Java is a versatile, object-oriented language that I use for building a wide range of applications,
                        from simple command-line tools to more complex GUI-based programs. Its cross-platform capabilities
                        and extensive libraries make it a go-to choice for many of my projects, including the chess game I
                        developed. Java’s robustness and security features also make it suitable for large-scale enterprise
                        applications.
                    </StyledP2>
                </div>

                <div className="eacher">
                    <StyledH3>Python</StyledH3>
                    <StyledP2>
                        Python is one of my preferred languages due to its readability and ease of use. I often use Python
                        for scripting, data analysis, automation tasks, and prototyping. Its extensive standard library and
                        strong community support make it ideal for quickly developing solutions in areas like data science,
                        machine learning, and web development.
                    </StyledP2>
                </div>

                <div className="eacher">
                    <StyledH3>C</StyledH3>
                    <StyledP2>
                        C is a foundational language in computer science that I’ve used to gain a deeper understanding of
                        low-level programming concepts, such as memory management and system-level operations. I have used C
                        in various courses to write programs that interact directly with hardware, as well as for
                        implementing algorithms that require high performance and fine-grained control over system
                        resources.
                    </StyledP2>
                </div>

                <div className="eacher">
                    <StyledH3>C++</StyledH3>
                    <StyledP2>
                        C++ builds on C by adding object-oriented features, making it suitable for software that requires
                        complex data structures and high performance. I use C++ for projects that demand both efficiency and
                        scalability, such as game development and competitive programming. Its use of classes and templates
                        allows for the creation of modular and reusable code.
                    </StyledP2>
                </div>

                <div className="eacher">
                    <StyledH3>Golang (Go)</StyledH3>
                    <StyledP2>
                        Go, or Golang, is a modern language developed by Google, known for its simplicity, concurrency
                        support, and efficiency. I use Go for building distributed systems and backend services due to its
                        excellent performance, ease of deployment, and ability to handle concurrent processes with
                        goroutines. Go’s straightforward syntax and built-in tools for testing and benchmarking make it a
                        great choice for scalable web applications.
                    </StyledP2>
                </div>
            </div>
        </>
    );
}
