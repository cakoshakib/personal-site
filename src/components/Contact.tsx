import "./Contact.css";
//@ts-ignore
import TypeWriterEffect from "react-typewriter-effect";

const Contact = () => {
  return (
    <div id="contactContainer">
      <h1>How to Reach Me</h1>
      <p>
        <span id="email">E-mail</span>: shakib.imp (at) gmail (dot) com
      </p>
      <p>
        <span id="linkedin">LinkedIn</span>:{" "}
        <a href="https://www.linkedin.com/in/shakib-rahman/">
          https://www.linkedin.com/in/shakib-rahman/
        </a>
      </p>
      <p>
        <span id="github">GitHub</span>:{" "}
        <a href="https://github.com/cakoshakib">
          https://github.com/cakoshakib
        </a>
      </p>
    </div>
  );
};

export default Contact;

