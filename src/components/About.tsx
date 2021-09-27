import './About.css'
//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect'

const About = () => {
  return (
    <div id="aboutContainer">
      <TypeWriterEffect
            startDelay={100}
            cursorColor="black"
            multiText={[
              "cat me.html",
              "Hello, world.",
            ]}
            multiTextDelay={300}
            typeSpeed={200}
          />
      <h2>My name is <span id="name">Shakib</span>, here is a little about me!</h2> 
      <ul>
        <li>Currently a sophomore at <span id="college">Rutgers University New Brunswick</span>.</li>
        <li>I am double majoring in <b>Computer Science</b> and <b>Mathematics</b>.</li>
        <li>My career interests lie somewhere in the realm of <b>Software Engineering</b>, <b>DevOps</b>, and <b>Full-Stack Development</b>.</li>
        <li>My favorite languages are <b>Java/Typescript</b>, <b>Python</b>, and <b>C++</b>.</li>
        <li>I am currently working on...</li>
        <ul>
          <li><a href="https://github.com/cakoshakib/wenda">Wenda</a></li> 
          <li>Learning Golang.</li>
          <li>Practicing Competitive Programming.</li>
          <li>Studying Systems Programming and Principles of Programming Languages</li>
          <li>Along with Linear Algebra, Probability, and Differential Equations.</li>
        </ul>
        <li>In my free time I enjoy chatting with friends, playing video games, watching anime, and of course programming. </li>
      </ul>
    </div>
  )
}

export default About;