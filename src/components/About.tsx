import "./About.css";
//@ts-ignore
import TypeWriterEffect from "react-typewriter-effect";

const About = () => {
  return (
    <div id="aboutContainer">
      <div>
        <TypeWriterEffect
          cursorColor="black"
          multiText={["Hello, world."]}
          multiTextDelay={300}
          typeSpeed={200}
        />
      </div>
      <h2>
        I'm <span id="name">Shakib</span>, here is a little about me!
      </h2>
      <ul>
        <li>
          Currently a full-time Software Engineer!
        </li>
        <li>
          I studied <b>Computer Science</b> and <b>Mathematics</b> at <span id="college">Rutgers</span>
          .
        </li>
        <li>
          I am broadly interested in <b>distributed systems</b> and scaling <b>production infrastructure</b>.{" "}
        </li>
        <li>
          My favorite languages are <b>Golang</b>, <b>Python</b>, and{" "}
          <b>TypeScript</b>.
        </li>
        <li>I am currently working on...</li>
        <ul>
          <li>
            Getting used to full-time work
          </li>
          <li>Maintaining algorithms knowledge (join me in doing the LeetCode daily :D)</li>
        </ul>
        <li>
          In my free time I enjoy playing video games,
          watching anime, and working on fun projects!
        </li>
      </ul>
    </div>
  );
};

export default About;
