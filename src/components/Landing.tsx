import "./Landing.css";

const Title = () => {
  return (
    <h1 className="main-title">
      {" "}
      Hi, I'm <span id="name">Shakib</span>.{" "}
    </h1>
  );
};

const Description = () => {
  return (
    <div>
      <h3 className="sub-desc">
        {" "}
        Software Engineer + Former <span id="work">Math/CS</span> Student
      </h3>
    </div>
  );
};

const Landing = () => {
  return (
    <div id="headerContainer">
      <Title />
      <Description />
    </div>
  );
};

export default Landing;
