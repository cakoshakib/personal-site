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
        My name is <span id="name">Shakib</span>, here is a little about me!
      </h2>
      <ul>
        <li>
          Currently a Senior at{" "}
          <span id="college">Rutgers University New Brunswick</span>.
        </li>
        <li>
          I am double majoring in <b>Computer Science</b> and <b>Mathematics</b>
          .
        </li>
        <li>
          I am broadly interested in <b>distributed systems</b> and scaling <b>production infrastructure</b>{" "}
        </li>
        <li>
          My favorite languages are <b>TypeScript</b>, <b>Python</b>, and{" "}
          <b>Golang</b>.
        </li>
        <li>I am currently working on...</li>
        <ul>
          <li>
            Building <a href="https://github.com/ProjectWenda/wenda-backend">Wenda</a>
          </li>
          <li>Practicing Competitive Programming.</li>
        </ul>
        <li>
          In my free time I enjoy chatting with friends, playing video games,
          watching anime, and working on personal projects!
        </li>
      </ul>
    </div>
  );
};

export default About;
