import './Landing.css'

const Title = () => {
  return (
    <h1 className="main-title"> Hi, I'm <span id="name">Shakib</span>. </h1>
  )
}

const Description = () => {
  return (
    <div>
      <h3 className="sub-desc"> Sophomore at <span id="college"> Rutgers University</span> </h3>
      <h3 className="sub-desc"> Computer Science and Mathematics </h3>
    </div>
  )
}

const Landing = () => {
  return (
    <div id="headerContainer">
      <Title />
      <Description />
    </div>
  )
}

export default Landing;