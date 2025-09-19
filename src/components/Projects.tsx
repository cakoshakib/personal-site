import "./Projects.css";
import { Image } from "react-bootstrap";
//@ts-ignore
import TypeWriterEffect from "react-typewriter-effect";

const Description = ({
  link,
  title,
  desc,
}: {
  link: string;
  title: string;
  desc: string;
}) => {
  return (
    <div>
      <h3 className="projectTitle">{title}</h3>
      <a className="projectLink" href={link}>
        {link}
      </a>
      <p className="projectDesc">{desc}</p>
    </div>
  );
};

const Project = ({
  title,
  link,
  img,
  desc,
}: {
  title: string;
  link: string;
  img: string;
  desc: string;
}) => {
  return (
    <div className="row">
      <div className="col-sm">
        <div className="image-backdrop">
          <Image className="mx-auto" src={img} />
        </div>
      </div>
      <div className="col-sm">
        <Description link={link} title={title} desc={desc} />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projectsContainer">
      <h1>Projects</h1>
      <Project
        title="Wenda 2.0"
        link="https://github.com/ProjectWenda"
        img="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXg0OWQ2OHk3YXlnazV2dXphdTRpd2EyZ294NWJtZWVud2JjbXltaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U5EcvwN9CE8CrGeVXt/giphy.gif"
        desc="An online productivity manager with built-in Discord integration. Built for scale with a serverless backend architecture using AWS Lambda and DynamoDB. Web frontend written in ReactJS, hosted on AWS S3, and distributed with Cloudfront."
      />
      <Project
        title="AniTUI"
        link="https://github.com/cakoshakib/ani-tui"
        img="https://media.giphy.com/media/4w72Xf19N0MIWpM8aY/giphy.gif"
        desc="A TUI written in Python to navigate through user's downloaded anime! Uses regex parsing to filter out unwanted file details in name. Links with VLC-Ani-Discord to launch both VLC and script at once. Calls AniList GraphQL API to pull watch list information. Published package on PyPi."
      />
      <Project
        title="Wenda"
        link="https://github.com/cakoshakib/wenda"
        img="https://i.imgur.com/dMwBULo.gif"
        desc="An offline productivity manager with the goal of security and efficiency. Capable of tracking the users weekly agenda, dates, and todos. Responsive application frontend written in React + TypeScript with ElectronJS. Data stored persistently in local JSON storage, leaving the users data in their own hands."
      />
      <Project
        title="VLC - Ani - Discord"
        link="https://github.com/cakoshakib/vlc-ani-discord"
        img="https://i.imgur.com/Kn5tsmP.gif"
        desc="A quality of life/automation tool for anime watchers using VLC Media Player. The tool scrapes and then parses VLC metadata. Using the data, it displays  rich presence status text on Discord. Upon completion of the playback it automatically updates AniList progress using their GraphQL API."
      />
      <Project
        title="Wrind"
        link="https://github.com/rosalogia/wrind"
        img="https://i.imgur.com/l76pHow.gif"
        desc="Web application made for HackRU Fall 2020. It ended up winning Best UI/UX! The premise of the project was to help foreign language learners practice their chosen language by allowing them to easily have flashcards made based on a chosen media input. I was in charge of the front end, linking up the backend, and webscraping data to convert into readable csv files."
      />
      <Project
        title="Late Bus Sign Up App"
        link="https://github.com/nbthstech/late-bus-signup"
        img="https://i.imgur.com/ao6y6bd.png"
        desc="Project created for my high school. It is a web app that allows the students of the school to sign up for the late bus digitally--improving from the antiquated handwritten procedure. It is currently used across the school (2000 students!)."
      />
      <Project
        title="Tech Club Website"
        link="https://github.com/nbttech/tech-club-website"
        img="https://i.imgur.com/c67EGuF.png"
        desc="A club website for the Tech Club at my high school. There isn't much to it- just a simple website that allows club members to keep up with various club activities."
      />
      <Project
        title="Space Shooter Game"
        link="https://github.com/cakoshakib/space-shooter-game"
        img="https://i.imgur.com/GejVE3I.png"
        desc="A simple Shoot 'Em Up made to learn Unity and C# Development. For this project, I went off a tutorial and then added my own boss! One of my first coding projects."
      />
    </div>
  );
};

export default Projects;

