import React from 'react'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img></img>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              
            </article>
          </div>
          <p>I am a front-end developer with a passion for crafting intuitive and engaging user experiences. With some experience in creating dynamic and responsive web applications, I have a strong understanding of HTML, CSS, and JavaScript, as well as a solid foundation in React. I enjoy collaborating with people to bring great ideas to life and create products that solve real-world problems for users. I am constantly seeking to improve my skills, stay up-to-date with the latest technologies, and take on new challenges to become a better developer and a better person.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About